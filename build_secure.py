import re
import base64
import sys
import os

def obfuscate_js(input_path, output_path_tm, output_path_vtd):
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Tách Header và Body
    header_match = re.search(r'(?s)(// ==UserScript==.*?// ==/UserScript==)', content)
    if not header_match:
        print("ERROR: Không tìm thấy Header UserScript!")
        return
    header = header_match.group(1)
    body = content[header_match.end():].strip()

    # 0. Convert template literals to standard string concatenations
    converted_body = []
    idx = 0
    body_len = len(body)
    while idx < body_len:
        if body[idx] == '`':
            idx += 1
            parts = []
            current_str = []
            while idx < body_len:
                if body[idx] == '`':
                    parts.append(('str', "".join(current_str)))
                    idx += 1
                    break
                elif body[idx] == '$' and idx + 1 < body_len and body[idx+1] == '{':
                    parts.append(('str', "".join(current_str)))
                    current_str = []
                    idx += 2
                    expr = []
                    brace_count = 1
                    while idx < body_len:
                        if body[idx] == '{':
                            brace_count += 1
                            expr.append(body[idx])
                            idx += 1
                        elif body[idx] == '}':
                            brace_count -= 1
                            if brace_count == 0:
                                idx += 1
                                break
                            expr.append(body[idx])
                            idx += 1
                        elif body[idx] == '\\' and idx + 1 < body_len:
                            expr.append(body[idx])
                            expr.append(body[idx+1])
                            idx += 2
                        else:
                            expr.append(body[idx])
                            idx += 1
                    parts.append(('expr', "".join(expr)))
                elif body[idx] == '\\' and idx + 1 < body_len:
                    current_str.append(body[idx])
                    current_str.append(body[idx+1])
                    idx += 2
                else:
                    current_str.append(body[idx])
                    idx += 1
            concats = []
            for t, val in parts:
                if t == 'str':
                    escaped = val.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '\\r')
                    concats.append(f'"{escaped}"')
                else:
                    concats.append(f'({val})')
            converted_body.append(" + ".join(concats))
        else:
            converted_body.append(body[idx])
            idx += 1
    body = "".join(converted_body)

    # Phân tích ký tự để tách Chuỗi, Chú thích và Code
    strings = []
    processed_body_chars = []
    i = 0
    length = len(body)

    while i < length:
        # Bỏ chú thích một dòng //
        if i + 1 < length and body[i] == '/' and body[i+1] == '/':
            i += 2
            while i < length and body[i] != '\n':
                i += 1
            processed_body_chars.append('\n')
            continue
        
        # Bỏ chú thích nhiều dòng /* */
        if i + 1 < length and body[i] == '/' and body[i+1] == '*':
            i += 2
            while i + 1 < length and not (body[i] == '*' and body[i+1] == '/'):
                i += 1
            i += 2
            continue

        # Tách chuỗi ký tự "" hoặc ''
        if body[i] in ('"', "'"):
            quote_char = body[i]
            start_quote = i
            i += 1
            str_val = []
            while i < length:
                if body[i] == '\\' and i + 1 < length:
                    escaped_char = body[i+1]
                    if escaped_char == 'n':
                        str_val.append('\n')
                    elif escaped_char == 'r':
                        str_val.append('\r')
                    elif escaped_char == 't':
                        str_val.append('\t')
                    elif escaped_char == 'b':
                        str_val.append('\b')
                    elif escaped_char == 'f':
                        str_val.append('\f')
                    elif escaped_char == '\\':
                        str_val.append('\\')
                    elif escaped_char == '"':
                        str_val.append('"')
                    elif escaped_char == "'":
                        str_val.append("'")
                    else:
                        str_val.append(body[i])
                        str_val.append(escaped_char)
                    i += 2
                elif body[i] == quote_char:
                    break
                else:
                    str_val.append(body[i])
                    i += 1
            
            # Kiểm tra xem chuỗi này có phải là Key của một Object Literal hay không (nhìn trước xem có ký tự : không)
            # Chỉ coi là Key nếu ký tự không khoảng trắng đứng trước là '{' hoặc ','
            prev_idx = start_quote - 1
            prev_char = ''
            while prev_idx >= 0:
                if body[prev_idx].isspace() or body[prev_idx] in ('\n', '\r'):
                    prev_idx -= 1
                else:
                    prev_char = body[prev_idx]
                    break

            next_idx = i + 1
            is_object_key = False
            if prev_char in ('{', ','):
                while next_idx < length:
                    char = body[next_idx]
                    if char.isspace() or char == '\n' or char == '\r':
                        next_idx += 1
                    elif char == ':':
                        is_object_key = True
                        break
                    else:
                        break
            
            raw_str = "".join(str_val)
            strings.append(raw_str)
            string_index = len(strings) - 1
            
            # Nếu là Key của Object, cần bọc [ ] để tránh lỗi cú pháp Javascript (Computed Property Name)
            if is_object_key:
                processed_body_chars.append(f"[_0xstr({string_index})]")
            else:
                processed_body_chars.append(f"_0xstr({string_index})")
            i += 1
            continue

        # Giữ nguyên các ký tự khác
        processed_body_chars.append(body[i])
        i += 1

    processed_body = "".join(processed_body_chars)

    # 1. Tự động thu thập các khai báo biến, hàm trong mã nguồn
    declared_names = set()
    
    # Tìm khai báo const, let, var (ví dụ: const logBox = ...)
    for match in re.finditer(r'\b(?:const|let|var)\s+([a-zA-Z0-9_]+)\b', processed_body):
        declared_names.add(match.group(1))
        
    # Tìm khai báo hàm (ví dụ: function init() { ...)
    for match in re.finditer(r'\bfunction\s+([a-zA-Z0-9_]+)\s*\(', processed_body):
        declared_names.add(match.group(1))

    # Tìm khai báo class (ví dụ: class Helper { ...)
    for match in re.finditer(r'\bclass\s+([a-zA-Z0-9_]+)\b', processed_body):
        declared_names.add(match.group(1))

    # 2. Thu thập tất cả các thuộc tính của đối tượng (được truy xuất qua dấu chấm, ví dụ: data.action)
    # Chúng ta phải loại bỏ các từ này ra khỏi danh sách đổi tên để tránh làm hỏng các thuộc tính API ngoại
    properties = set()
    for match in re.finditer(r'\.([a-zA-Z0-9_]+)\b', processed_body):
        properties.add(match.group(1))

    # Danh sách các từ khóa Javascript và API toàn cục cần giữ nguyên
    EXCLUDES = {
        'window', 'document', 'localStorage', 'sessionStorage', 'console', 'chrome', 
        'GM_getValue', 'GM_setValue', 'GM_registerMenuCommand', 'GM_xmlhttpRequest', 'GM_openInTab',
        'Math', 'Date', 'JSON', 'Promise', 'Error', 'Uint8Array', 'TextDecoder', 'URL', 'Blob',
        'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', 'parseInt', 'parseFloat',
        'alert', 'confirm', 'prompt', 'location', 'href', 'hash', 'onload', 'addEventListener',
        'removeEventListener', 'Worker', 'postMessage', 'onmessage', 'body', 'documentElement',
        'head', 'appendChild', 'removeChild', 'createElement', 'querySelector', 'querySelectorAll',
        'getElementById', 'getElementsByClassName', 'innerText', 'innerHTML', 'style', 'display',
        'visibility', 'opacity', 'offsetWidth', 'offsetHeight', 'getComputedStyle', 'opener', 'top',
        'self', 'parent', 'length', 'push', 'pop', 'shift', 'unshift', 'splice', 'slice', 'join',
        'split', 'indexOf', 'includes', 'forEach', 'map', 'filter', 'some', 'every', 'find',
        'findIndex', 'reduce', 'reduceRight', 'sort', 'reverse', 'toString', 'trim', 'toLowerCase',
        'toUpperCase', 'replace', 'match', 'test', 'search', 'startsWith', 'endsWith', 'clear',
        'getItem', 'setItem', 'removeItem', 'Object', 'keys', 'values', 'entries', 'assign',
        'e', 'evt', 'event', 'err', 'error', 'req', 'res', 'response', 'data', 'status', 'type',
        'options', 'method', 'url', 'headers', 'text', 'responseText', 'onload', 'onerror',
        'ontimeout', 'active', 'insert', 'setParent', 'width', 'height', 'top', 'left', 'right',
        'bottom', 'position', 'zIndex', 'backgroundColor', 'color', 'padding', 'borderRadius',
        'boxShadow', 'fontFamily', 'fontSize', 'fontWeight', 'userSelect', 'paddingRight',
        'marginTop', 'border', 'cursor', 'borderStyle', 'borderColor', 'borderWidth', 'alignItems',
        'justifyContent', 'flexDirection', 'margin', 'display', 'borderCollapse', 'cellSpacing',
        'cellPadding', 'th', 'td', 'tr', 'table', 'thead', 'tbody', 'input', 'textarea', 'button',
        'select', 'option', 'value', 'placeholder', 'disabled', 'checked', 'type', 'id', 'class',
        'className', 'classList', 'add', 'remove', 'toggle', 'contains', 'click', 'focus', 'blur',
        'select', 'reload', 'navigator', 'userAgent', 'play', 'AudioContext', 'createOscillator',
        'createGain', 'connect', 'start', 'stop', 'currentTime', 'destination', 'gain', 'frequency',
        'setValueAtTime', 'state', 'resume', 'suspend', 'isSettled', 'timer', 'attempts', 'maxAttempts',
        'tryCall', 'makeRequest', 'urlOrAction', 'init', 'GM_info',
        'btn', 'badge', 'close', 'toggle', 'url', 'pc', 'save', 'content', 'wrapper', 'saved', 'view', 'edit', 'status', 'tabs', 'container', 'open', 'all', 'log', 'box', 'panel', 'launcher', 'transition', 'style', 'audioCtx', 'wakeLock',
        'lock', 'overlay', 'pass', 'unlock', 'msg', 'error'
    }

    # Hợp nhất các tên thuộc tính vào danh sách loại trừ (Excludes)
    EXCLUDES.update(properties)

    # Lọc ra danh sách biến/hàm thực tế cần đổi tên (chỉ đổi các tên có độ dài > 2 để tránh đụng độ cờ regex như /.../g, /.../i)
    to_rename = {name for name in (declared_names - EXCLUDES) if len(name) > 2}

    # 3. Tạo bảng ánh xạ đổi tên ngẫu nhiên dạng _0xXXXX
    RENAMES = {}
    for idx, name in enumerate(sorted(list(to_rename))):
        hex_name = f"_0x{idx:04x}"
        RENAMES[name] = hex_name

    # Thực hiện đổi tên biến/hàm bằng Regex thông minh (Không đổi tên khi có dấu chấm phía trước hoặc dấu hai chấm phía sau)
    for original, renamed in RENAMES.items():
        # (?<!\.) : Không khớp nếu phía trước là dấu chấm (tránh đổi tên thuộc tính, ví dụ: data.action)
        # (?!:)   : Không khớp nếu phía sau là dấu hai chấm (tránh đổi tên key trong object literal, ví dụ: { action: 1 })
        pattern = r'(?<!\.)\b' + re.escape(original) + r'\b(?!:)'
        processed_body = re.sub(pattern, renamed, processed_body)

    # Nén các khoảng trắng (Minify cơ bản)
    processed_body = re.sub(r'[ \t]+', ' ', processed_body)
    processed_body = re.sub(r'\s*\n\s*', '\n', processed_body)
    processed_body = re.sub(r'\r', '', processed_body)

    # Encode mảng chuỗi sang Base64
    base64_strings = []
    for s in strings:
        # Sử dụng utf-8 để tương thích các ký tự tiếng Việt
        b64 = base64.b64encode(s.encode('utf-8')).decode('utf-8')
        base64_strings.append(b64)

    # Tạo hàm giải mã chuỗi Base64 ở Runtime
    # Việc giải mã dùng atob của trình duyệt và TextDecoder (hoặc decodeURIComponent)
    decoder_func = """
    const _0xarr = [
"""
    for idx, b64_str in enumerate(base64_strings):
        comma = "," if idx < len(base64_strings) - 1 else ""
        decoder_func += f"        '{b64_str}'{comma}\n"

    decoder_func += """    ];
    function _0xstr(idx) {
        try {
            const b64 = _0xarr[idx];
            const binString = atob(b64);
            const bytes = new Uint8Array(binString.length);
            for (let i = 0; i < binString.length; i++) {
                bytes[i] = binString.charCodeAt(i);
            }
            return new TextDecoder('utf-8').decode(bytes);
        } catch (e) {
            return '';
        }
    }
"""

    # Thêm khối try-catch bao bọc toàn bộ body để phát hiện và báo lỗi trực quan trên trang web
    wrapped_body = f"""
try {{
    {processed_body}
}} catch (e) {{
    console.error("Script Runtime Error:", e);
    const errDiv = document.createElement("div");
    errDiv.style.cssText = "position: fixed; bottom: 20px; left: 20px; z-index: 999999; background-color: #f44336; color: white; padding: 20px; border-radius: 8px; font-family: monospace; font-size: 14px; max-width: 500px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); border: 2px solid #fff; white-space: pre-wrap; line-height: 1.5;";
    errDiv.innerHTML = `<h3 style="margin:0 0 10px 0; font-size:16px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.3); padding-bottom:5px;">⚠️ VTDAuto Runtime Error</h3><b>Message:</b>\\n${{e.message}}\\n\\n<b>Stack:</b>\\n${{e.stack || "No stack"}}`;
    
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = " &times; ";
    closeBtn.style.cssText = "position: absolute; top: 5px; right: 10px; cursor: pointer; font-size: 20px; font-weight: bold;";
    closeBtn.onclick = () => errDiv.remove();
    errDiv.appendChild(closeBtn);
    
    if (document.body) {{
        document.body.appendChild(errDiv);
    }} else {{
        document.addEventListener("DOMContentLoaded", () => document.body.appendChild(errDiv));
    }}
}}
"""

    # === TẠO OUTPUT CHO TAMPERMONKEY ===
    final_body_tm = decoder_func + "\n" + wrapped_body
    with open(output_path_tm, 'w', encoding='utf-8') as f:
        f.write(header + "\n\n" + final_body_tm)

    # === TẠO OUTPUT CHO VTDAUTO ===
    final_body_vtd = decoder_func + "\n" + wrapped_body
    with open(output_path_vtd, 'w', encoding='utf-8') as f:
        f.write(header + "\n\n" + final_body_vtd)

    print("=== SUCCESS ===")
    print("1. Exported TM: " + output_path_tm)
    print("2. Exported VTDAuto: " + output_path_vtd)

if __name__ == "__main__":
    # Đọc tham số truyền vào
    ws_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    os.chdir(ws_dir)
    
    obfuscate_js(
        "shopee_auto_print.user.js",
        "shopee_auto_print_protected_tm.user.js",
        "shopee_auto_print_protected_vtd.user.js"
    )
