import os
import subprocess
import time
import shutil

# Let's find project path
proj_dir = r'c:\Users\minhhiep.vu\.gemini\antigravity\scratch\In Bill\custom_script_runner'
icon_path = os.path.join(proj_dir, 'icon.png')

html_content = f"""<!DOCTYPE html>
<html>
<head>
    <title>Resize Icon</title>
</head>
<body>
    <canvas id="canvas16" width="16" height="16"></canvas>
    <canvas id="canvas48" width="48" height="48"></canvas>
    <canvas id="canvas128" width="128" height="128"></canvas>
    
    <script>
        const img = new Image();
        img.src = 'icon.png';
        img.onload = function() {{
            const sizes = [16, 48, 128];
            sizes.forEach(size => {{
                const canvas = document.getElementById('canvas' + size);
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, size, size);
                
                // Send to local python server if we want, or download.
                // Instead of complicated things, let's post the base64 back to the python server.
                const dataUrl = canvas.toDataURL('image/png');
                fetch('/save/' + size, {{
                    method: 'POST',
                    body: dataUrl
                }});
            }});
            setTimeout(() => {{
                fetch('/done');
            }}, 1000);
        }};
    </script>
</body>
</html>
"""

# Write index.html next to icon.png so it can load it locally
html_path = os.path.join(proj_dir, 'temp_resize.html')
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

# Start a simple HTTP server in python that accepts post requests to save files
from http.server import SimpleHTTPRequestHandler, HTTPServer
import base64

class ResizeHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Serve files from proj_dir
        return os.path.join(proj_dir, path.lstrip('/'))
        
    def do_POST(self):
        if self.path.startswith('/save/'):
            size = self.path.split('/')[-1]
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length).decode('utf-8')
            # Extract base64 data
            if ',' in body:
                base64_data = body.split(',')[1]
                img_data = base64.b64decode(base64_data)
                out_path = os.path.join(proj_dir, f'icon{size}.png')
                with open(out_path, 'wb') as f:
                    f.write(img_data)
                print(f"Saved icon{size}.png")
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"OK")
        elif self.path == '/done':
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"OK")
            print("Done processing. Shutting down server...")
            # Schedule shutdown
            import threading
            threading.Thread(target=lambda: server.shutdown()).start()

server = HTTPServer(('127.0.0.1', 8088), ResizeHandler)

# Start browser to trigger the resize
import webbrowser
webbrowser.open('http://127.0.0.1:8088/temp_resize.html')

print("Starting server, waiting for browser to complete resizing...")
server.serve_forever()

# Clean up
if os.path.exists(html_path):
    os.remove(html_path)

print("Icons resized successfully!")
