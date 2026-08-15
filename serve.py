#!/usr/bin/env python3
"""Minimal static dev server for the NteK site.

Deliberately avoids os.getcwd() anywhere in the import or startup path —
the sandboxed launcher shell can start in a directory it cannot stat, which
makes http.server's own argparse default (default=os.getcwd()) raise
PermissionError before any of our code runs.
"""
import os
import posixpath
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlparse

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get("PORT", "8091"))

TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".woff2": "font/woff2",
    ".ico": "image/x-icon",
    ".md": "text/plain; charset=utf-8",
}


class Handler(BaseHTTPRequestHandler):
    server_version = "NteKDev/1.0"

    def _resolve(self):
        path = unquote(urlparse(self.path).path)
        if path.endswith("/"):
            path += "index.html"
        # normalise and strip any leading slash so join stays inside ROOT
        path = posixpath.normpath(path).lstrip("/")
        full = os.path.abspath(os.path.join(ROOT, path))
        if not full.startswith(ROOT):
            return None
        return full

    def do_GET(self):
        full = self._resolve()
        if not full or not os.path.isfile(full):
            self.send_response(404)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"Not found: " + self.path.encode())
            return

        with open(full, "rb") as fh:
            body = fh.read()

        ctype = TYPES.get(os.path.splitext(full)[1].lower(),
                          "application/octet-stream")
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        sys.stdout.write("%s - %s\n" % (self.address_string(), fmt % args))
        sys.stdout.flush()


if __name__ == "__main__":
    srv = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print("NteK site serving on http://127.0.0.1:%d (root: %s)" % (PORT, ROOT))
    sys.stdout.flush()
    srv.serve_forever()
