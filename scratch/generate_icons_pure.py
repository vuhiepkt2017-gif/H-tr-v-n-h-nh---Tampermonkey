import os
import urllib.request
import json
import base64

# A simple fallback Python script to write a 1x1 or simple fallback transparent/dummy PNG bytes to check, 
# but actually we can generate standard 16, 48, 128 solid color PNGs using Python's zlib and struct 
# since png format is simple enough, OR we can download/generate a basic PNG.
# Even simpler: let's generate a tiny PNG icon file using pure Python zlib to avoid any browser interaction.

import zlib
import struct

def write_png(width, height, filepath):
    # Create a simple solid color PNG (blue/teal) using pure python
    # PNG signature
    png_sig = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    ihdr_chunk = b'IHDR' + ihdr_data
    ihdr_chunk = struct.pack('>I', len(ihdr_data)) + ihdr_chunk + struct.pack('>I', zlib.crc32(ihdr_chunk))
    
    # IDAT chunk (pixel data: RGB values with a filter byte 0 at the start of each row)
    # Teal color: R=20, G=160, B=180
    row_data = b'\x00' + b'\x14\xa0\xb4' * width
    img_data = row_data * height
    idat_data = zlib.compress(img_data)
    idat_chunk = b'IDAT' + idat_data
    idat_chunk = struct.pack('>I', len(idat_data)) + idat_chunk + struct.pack('>I', zlib.crc32(idat_chunk))
    
    # IEND chunk
    iend_chunk = struct.pack('>I', 0) + b'IEND' + struct.pack('>I', zlib.crc32(b'IEND'))
    
    with open(filepath, 'wb') as f:
        f.write(png_sig + ihdr_chunk + idat_chunk + iend_chunk)

proj_dir = r'c:\Users\minhhiep.vu\.gemini\antigravity\scratch\In Bill\custom_script_runner'
write_png(16, 16, os.path.join(proj_dir, 'icon16.png'))
write_png(48, 48, os.path.join(proj_dir, 'icon48.png'))
write_png(128, 128, os.path.join(proj_dir, 'icon128.png'))
print("Successfully generated icon16.png, icon48.png, and icon128.png using pure python!")
