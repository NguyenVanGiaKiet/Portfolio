// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // Bạn cần đăng ký tại https://www.emailjs.com/ để lấy các giá trị này
  SERVICE_ID: 'service_30e9e74', // Thay bằng Service ID của bạn
  TEMPLATE_ID: 'template_e6252ju', // Thay bằng Template ID của bạn
  PUBLIC_KEY: 'p27FvVCr1XisXeZY-', // Thay bằng Public Key của bạn
  
  // Email nhận tin nhắn
  RECIPIENT_EMAIL: 'nguyenvangiakiet20.08@gmail.com'
};

// Hướng dẫn cấu hình EmailJS:
/*
1. Đăng ký tài khoản tại https://www.emailjs.com/
2. Tạo Email Service:
   - Vào Email Services -> Add New Service
   - Chọn Gmail (hoặc dịch vụ khác)
   - Kết nối tài khoản email của bạn
3. Tạo Email Template:
   - Vào Email Templates -> Create New Template
   - Template ID sẽ tự động tạo
   - Nội dung template:
     {{from_name}} ({{from_email}}) gửi tin nhắn từ portfolio:
     
     {{message}}
4. Lấy Public Key:
   - Vào Account -> API Keys
   - Copy Public Key
5. Cập nhật các giá trị trong file config này
*/
