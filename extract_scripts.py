import json
import re

transcript_path = r"C:\Users\minhhiep.vu\.gemini\antigravity\brain\f054a210-a421-4a24-80e1-69f653cab1f2\.system_generated\logs\transcript_full.jsonl"

apps_script_content = None
userscript_content = None

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            content = data.get("content", "")
            if not content:
                continue
            
            # Find apps script content
            if "Google Apps Script - Backend gộp chung 3 tính năng:" in content and "function doGet" in content:
                matches = re.findall(r"```(?:javascript|js)\n(.*?)\n```", content, re.DOTALL)
                for m in matches:
                    if "function doGet" in m:
                        apps_script_content = m
            
            # Find userscript content
            if "SPX Multi-Tab Parallel Automation Helper" in content or "Multi-Tab Parallel Helper" in content:
                matches = re.findall(r"```(?:javascript|js)\n(.*?)\n```", content, re.DOTALL)
                for m in matches:
                    if "==UserScript==" in m:
                        userscript_content = m
        except Exception as e:
            pass

if apps_script_content:
    with open("recovered_apps_script.js", "w", encoding="utf-8") as f:
        f.write(apps_script_content)
    print("Recovered Apps Script!")
else:
    print("Could not find Apps Script.")

if userscript_content:
    with open("recovered_userscript.js", "w", encoding="utf-8") as f:
        f.write(userscript_content)
    print("Recovered Userscript!")
else:
    print("Could not find Userscript.")
