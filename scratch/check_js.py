with open(r"c:\Users\minhhiep.vu\.gemini\antigravity\scratch\In Bill\shopee_auto_print.user.js", "r", encoding="utf-8") as f:
    code = f.read()

in_backtick = False
in_single = False
in_double = False
escape = False

lines = code.split('\n')
for line_idx, line in enumerate(lines, 1):
    char_idx = 0
    while char_idx < len(line):
        c = line[char_idx]
        if escape:
            escape = False
            char_idx += 1
            continue
        if c == '\\':
            escape = True
            char_idx += 1
            continue
            
        if in_backtick:
            if c == '`':
                in_backtick = False
        elif in_single:
            if c == "'":
                in_single = False
        elif in_double:
            if c == '"':
                in_double = False
        else:
            if c == '`':
                in_backtick = True
            elif c == "'":
                in_single = True
            elif c == '"':
                in_double = True
        char_idx += 1
    escape = False

print("Unclosed states:")
print("Backtick open:", in_backtick)
print("Single quote open:", in_single)
print("Double quote open:", in_double)
