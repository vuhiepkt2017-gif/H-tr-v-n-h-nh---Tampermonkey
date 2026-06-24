import re

with open("c:/Users/minhhiep.vu/.gemini/antigravity/scratch/In Bill/custom_script_runner/default_shopee_script.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "JSON.parse" in line:
        print(f"Line {i+1}: {line.strip()}")
