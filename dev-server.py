"""
Dev server for Vanessa Noel Portfolio
Serves all files with no-cache headers so edits show on refresh.
Run: python dev-server.py
Then open: http://localhost:3333
"""
import http.server, os

PORT = 3333

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        super().end_headers()

    def log_message(self, format, *args):
        # Suppress noisy request logs — only show startup message
        pass

os.chdir(os.path.dirname(os.path.abspath(__file__)))
print(f'\n  Portfolio dev server running at http://localhost:{PORT}')
print(f'  Edit data.js or _shared.css, then just refresh — no commit needed.\n')
http.server.test(HandlerClass=NoCacheHandler, port=PORT, bind='localhost')
