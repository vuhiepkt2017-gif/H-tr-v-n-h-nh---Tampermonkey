<#
.SYNOPSIS
    Mã hóa (obfuscate) script Tampermonkey để người khác không đọc được code
.DESCRIPTION
    - Giữ nguyên header ==UserScript== (bắt buộc để Tampermonkey nhận diện)
    - Mã hóa toàn bộ phần code bằng XOR + Base64 + biến đổi chuỗi
    - Tạo file .user.js mới có thể import trực tiếp vào Tampermonkey
.USAGE
    Chạy: .\build_obfuscated.ps1
    Output: shopee_auto_print_protected.user.js
#>

$inputFile = "shopee_auto_print.user.js"
$outputFileTM = "shopee_auto_print_protected_tm.user.js"
$outputFileVTD = "shopee_auto_print_protected_vtd.user.js"

# Đọc file gốc
$content = Get-Content -Path $inputFile -Raw -Encoding UTF8

# Tách header UserScript và code body
$headerPattern = '(?s)(// ==UserScript==.*?// ==/UserScript==)'
if ($content -match $headerPattern) {
    $header = $Matches[1]
    $bodyStartIndex = $content.IndexOf("// ==/UserScript==") + "// ==/UserScript==".Length
    $codeBody = $content.Substring($bodyStartIndex).Trim()
} else {
    Write-Host "ERROR: Khong tim thay header UserScript!" -ForegroundColor Red
    exit 1
}

Write-Host "Header: $($header.Length) chars"
Write-Host "Code body: $($codeBody.Length) chars"

# === LAYER 1: XOR với key ngẫu nhiên ===
$xorKey = -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | ForEach-Object { [char]$_ })
$codeBytes = [System.Text.Encoding]::UTF8.GetBytes($codeBody)
$keyBytes = [System.Text.Encoding]::UTF8.GetBytes($xorKey)
$xoredBytes = New-Object byte[] $codeBytes.Length

for ($i = 0; $i -lt $codeBytes.Length; $i++) {
    $xoredBytes[$i] = $codeBytes[$i] -bxor $keyBytes[$i % $keyBytes.Length]
}

# === LAYER 2: Base64 encode ===
$base64 = [Convert]::ToBase64String($xoredBytes)

# === LAYER 3: Chia thành chunks và xáo trộn ===
$chunkSize = 76
$chunks = @()
for ($i = 0; $i -lt $base64.Length; $i += $chunkSize) {
    $len = [Math]::Min($chunkSize, $base64.Length - $i)
    $chunks += $base64.Substring($i, $len)
}

Write-Host "Encoded: $($base64.Length) chars in $($chunks.Count) chunks"

# === 1. TẠO DECODER CHO TAMPERMONKEY (Sử dụng Blob URL Proxy để vượt qua CSP) ===
$chunksArrayStr = ""
for ($i = 0; $i -lt $chunks.Count; $i++) {
    $comma = if ($i -lt $chunks.Count - 1) { "," } else { "" }
    $chunksArrayStr += "        '$($chunks[$i])'" + $comma + "`n"
}

$decoderTM = @"

(function(){
    var _0xf3a1='$xorKey';
    var _0xd7b2=[
$chunksArrayStr    ];
    var _0xe5c3=_0xd7b2.join('');
    var _0xa1d4=atob(_0xe5c3);
    var _0xb2e5=new Uint8Array(_0xa1d4.length);
    for(var _0xc3f6=0;_0xc3f6<_0xa1d4.length;_0xc3f6++){
        _0xb2e5[_0xc3f6]=_0xa1d4.charCodeAt(_0xc3f6)^_0xf3a1.charCodeAt(_0xc3f6%_0xf3a1.length);
    }
    var decrypted = new TextDecoder('utf-8').decode(_0xb2e5);

    // Proxy GM APIs lên Window để script trong Blob có thể gọi
    window.GM_xmlhttpRequest = GM_xmlhttpRequest;
    window.GM_setValue = GM_setValue;
    window.GM_getValue = GM_getValue;
    window.GM_registerMenuCommand = GM_registerMenuCommand;
    window.GM_openInTab = GM_openInTab;

    // Chạy thông qua Blob URL để vượt qua kiểm duyệt CSP eval của Chrome trên Tampermonkey
    var scriptEl = document.createElement("script");
    var blob = new Blob([decrypted], { type: "text/javascript" });
    var blobUrl = URL.createObjectURL(blob);
    scriptEl.src = blobUrl;
    (document.documentElement || document.head).appendChild(scriptEl);
    scriptEl.onload = function() {
        scriptEl.remove();
        URL.revokeObjectURL(blobUrl);
    };
})();
"@

# === 2. TẠO DECODER CHO VTDAUTO (Giải mã chạy trực tiếp bằng eval) ===
# VTDAuto đã có sẵn Blob URL Loader tích hợp ở loader.js của extension, nên script chỉ cần eval trực tiếp trong sandbox
$decoderVTD = @"

(function(){
    var _0xf3a1='$xorKey';
    var _0xd7b2=[
$chunksArrayStr    ];
    var _0xe5c3=_0xd7b2.join('');
    var _0xa1d4=atob(_0xe5c3);
    var _0xb2e5=new Uint8Array(_0xa1d4.length);
    for(var _0xc3f6=0;_0xc3f6<_0xa1d4.length;_0xc3f6++){
        _0xb2e5[_0xc3f6]=_0xa1d4.charCodeAt(_0xc3f6)^_0xf3a1.charCodeAt(_0xc3f6%_0xf3a1.length);
    }
    eval(new TextDecoder('utf-8').decode(_0xb2e5));
})();
"@

# Ghi file cho Tampermonkey
$outputTM = $header + "`n`n" + $decoderTM
[System.IO.File]::WriteAllText(
    (Join-Path (Get-Location) $outputFileTM),
    $outputTM,
    [System.Text.Encoding]::UTF8
)

# Ghi file cho VTDAuto
$outputVTD = $header + "`n`n" + $decoderVTD
[System.IO.File]::WriteAllText(
    (Join-Path (Get-Location) $outputFileVTD),
    $outputVTD,
    [System.Text.Encoding]::UTF8
)

Write-Host ""
Write-Host "=== HOAN TAT ===" -ForegroundColor Green
Write-Host "1. Da tao file TM: $outputFileTM" -ForegroundColor Cyan
Write-Host "2. Da tao file VTDAuto: $outputFileVTD" -ForegroundColor Cyan
Write-Host ""

Write-Host "2. Chon file: $outputFile"
Write-Host "3. Script se hoat dong binh thuong nhung code khong doc duoc"
