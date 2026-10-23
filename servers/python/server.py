"""Serveur Python des démos TMaps : sert le dossier demos/ et génère
/shared/config.js à partir de la variable d'environnement TMAPS_API_KEY."""

import json
import os
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

PORT = int(os.environ.get("PORT") or 8080)
DEMOS_DIR = os.environ.get("DEMOS_DIR") or str(Path(__file__).resolve().parents[2] / "demos")
CONFIG_JS = f"window.TMAPS_API_KEY = {json.dumps(os.environ.get('TMAPS_API_KEY') or 'YOUR_API_KEY')};\n".encode()


class DemoHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.split("?")[0] == "/shared/config.js":
            self.send_response(200)
            self.send_header("Content-Type", "text/javascript; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(CONFIG_JS)))
            self.end_headers()
            self.wfile.write(CONFIG_JS)
            return
        super().do_GET()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("", PORT), partial(DemoHandler, directory=DEMOS_DIR))
    print(f"TMaps demos (Python) listening on :{PORT}, serving {DEMOS_DIR}", flush=True)
    server.serve_forever()
