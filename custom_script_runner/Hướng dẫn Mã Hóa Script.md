# Hướng dẫn Mã Hóa, Đóng gói và Đồng bộ GitHub VTDAuto

Tài liệu này hướng dẫn cách mã hóa mã nguồn gốc, đóng gói tệp cài đặt `.zip` và đồng bộ mã nguồn lên GitHub.

---

## 1. Bản gốc để dự phòng và di chuyển máy tính
- **Mã nguồn gốc chưa mã hóa**: Tệp `shopee_auto_print.user.js` nằm ở thư mục gốc của dự án. 
- Hãy sao chép toàn bộ thư mục dự án này hoặc tải từ GitHub Private của bạn về máy khác để tiếp tục làm việc mà không sợ mất mát dữ liệu.

---

## 2. Câu lệnh gửi cho Antigravity để thực hiện tự động
Mỗi khi bạn muốn **Mã hóa mã nguồn gốc**, **Đóng gói Extension thành file zip**, và **Đồng bộ toàn bộ file lên GitHub**, hãy copy dòng yêu cầu dưới đây và gửi cho Antigravity:

> **Yêu cầu Antigravity**: "Hãy chạy kịch bản mã hóa `build_secure.py`, sao chép tệp bảo mật vào thư mục extension làm tệp mặc định, đóng gói zip lưu ra OneDrive Desktop, sau đó tự động git commit và push toàn bộ mã nguồn lên cả hai kho lưu trữ GitHub giúp tôi."

Hệ thống AI sẽ tự động thực hiện tuần tự các bước:
1. Chạy mã hóa tệp gốc `shopee_auto_print.user.js`.
2. Sao chép đè tệp bảo mật vào `custom_script_runner/default_shopee_script.js`.
3. Đóng gói zip lưu ra Desktop OneDrive.
4. Đẩy toàn bộ code mới nhất lên cả 2 repository GitHub để lưu trữ.

---

## 3. Quy trình thực hiện thủ công bằng tay (Nếu không dùng AI)

Nếu bạn thực hiện trên máy khác mà không có trợ lý Antigravity, hãy mở Terminal tại thư mục dự án và chạy lần lượt các lệnh sau:

### Bước 3.1: Chạy script mã hóa bằng Python
```powershell
python build_secure.py
```

### Bước 3.2: Copy đè tệp đã mã hóa vào thư mục Extension
```powershell
Copy-Item -Path "shopee_auto_print_protected_vtd.user.js" -Destination "custom_script_runner/default_shopee_script.js" -Force
```

### Bước 3.3: Chạy script nén Extension thành file Zip
```powershell
python scratch/zip_extension.py
```

### Bước 3.4: Đẩy toàn bộ thay đổi lên GitHub
```powershell
git add .
git commit -m "Cập nhật mã nguồn và extension"
git push origin main
git push https://github.com/vuhiepkt2017-gif/Extention-VTDAuto.git main --force
```
