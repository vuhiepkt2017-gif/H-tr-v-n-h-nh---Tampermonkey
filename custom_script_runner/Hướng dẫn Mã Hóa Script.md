# Hướng dẫn Mã Hóa và Đóng gói Script VTDAuto

Tài liệu này hướng dẫn cách lấy mã nguồn chưa mã hóa (bản gốc), tiến hành mã hóa bảo mật (obfuscate), sao chép vào Extension, và đóng gói thành tệp `.zip` hoàn chỉnh.

---

## 1. Trình tự thực hiện và Các tệp liên quan

Quy trình xây dựng (build) được tự động hóa thông qua hai công cụ Python nằm trong dự án:

1. **Mã nguồn chưa mã hóa (Bản gốc)**:
   - Tên tệp: `shopee_auto_print.user.js`
   - Chứa toàn bộ logic hoạt động dạng văn bản thuần túy (In Bill, In TO, Chuyển Pick, Quét TO).

2. **Kịch bản Mã hóa bảo mật**:
   - Tên tệp: `build_secure.py`
   - Nhiệm vụ: Tách tiêu đề (Header UserScript), chuyển đổi Template Literals, mã hóa toàn bộ chuỗi ký tự (Strings) sang Base64 và đổi tên biến cục bộ thành dạng hex (`_0x...`) để chống dịch ngược. Sau đó xuất ra hai bản:
     - `shopee_auto_print_protected_tm.user.js` (Bản cho Tampermonkey)
     - `shopee_auto_print_protected_vtd.user.js` (Bản tích hợp sẵn vào Extension)

3. **Kịch bản Đóng gói Extension**:
   - Tên tệp: `scratch/zip_extension.py`
   - Nhiệm vụ: Quét thư mục `custom_script_runner/` (nơi chứa Extension VTDAuto) và nén thành tệp `VTDAuto_Extension.zip` để cài đặt trực tiếp lên Chrome.

---

## 2. Các bước triển khai chi tiết

Mỗi khi bạn muốn cập nhật logic nghiệp vụ, hãy thực hiện lần lượt các bước sau:

### Bước 2.1: Chỉnh sửa mã nguồn chưa mã hóa
Mọi chỉnh sửa logic cần thực hiện trên file gốc chưa mã hóa: `shopee_auto_print.user.js`.

### Bước 2.2: Chạy lệnh mã hóa bảo mật
Mở Terminal tại thư mục dự án và chạy kịch bản Python:
```powershell
python build_secure.py
```
Sau khi chạy thành công, kịch bản sẽ xuất hiện thông báo:
`=== SUCCESS ===`
`1. Exported TM: shopee_auto_print_protected_tm.user.js`
`2. Exported VTDAuto: shopee_auto_print_protected_vtd.user.js`

### Bước 2.3: Sao chép mã nguồn đã bảo mật vào Extension
Chạy lệnh sao chép đè bản bảo mật thành tệp script mặc định của Extension:
```powershell
Copy-Item -Path "shopee_auto_print_protected_vtd.user.js" -Destination "custom_script_runner/default_shopee_script.js" -Force
```

### Bước 2.4: Đóng gói thành tệp Zip cài đặt
Tiến hành chạy tệp đóng gói để xuất file zip ra Desktop:
```powershell
python scratch/zip_extension.py
```
Tệp `VTDAuto_Extension.zip` sẽ được tạo ra tại thư mục Desktop của máy tính.

---

## 3. Câu lệnh yêu cầu gửi cho Antigravity thực hiện tự động

Khi pair programming với Antigravity, nếu bạn muốn thực hiện mã hóa và đóng gói nhanh, chỉ cần gửi yêu cầu sau:

> **Yêu cầu**: "Hãy chạy kịch bản mã hóa `build_secure.py`, sao chép tệp bảo mật vào thư mục extension và đóng gói tệp zip lưu ra OneDrive Desktop giúp tôi."

Hệ thống AI sẽ tự động chạy toàn bộ các bước từ 2.2 đến 2.4 chỉ trong một lượt phản hồi.
