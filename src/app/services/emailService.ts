import { EMAILJS_CONFIG } from '../config/emailjs';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export class EmailService {
  // Cách 1: Sử dụng EmailJS (không cần backend)
  static async sendEmailJS(data: EmailData): Promise<boolean> {
    try {
      // Kiểm tra xem đã cấu hình EmailJS chưa
      if (EMAILJS_CONFIG.SERVICE_ID === 'service_your_service_id' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'template_your_template_id' || 
          EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key') {
        console.warn('EmailJS chưa được cấu hình. Vui lòng cập nhật file config/emailjs.ts');
        return false;
      }

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
      };

      // Gửi email sử dụng EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.SERVICE_ID,
          template_id: EMAILJS_CONFIG.TEMPLATE_ID,
          user_id: EMAILJS_CONFIG.PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        console.log('Email đã được gửi thành công qua EmailJS');
      }

      return response.ok;
    } catch (error) {
      console.error('Lỗi khi gửi email qua EmailJS:', error);
      return false;
    }
  }

  // Cách 2: Sử dụng API backend (nếu bạn có server)
  static async sendEmailBackend(data: EmailData): Promise<boolean> {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return response.ok;
    } catch (error) {
      console.error('Lỗi khi gửi email qua backend:', error);
      return false;
    }
  }

  // Cách 3: Sử dụng Formspree (đơn giản nhất)
  static async sendFormspree(data: EmailData): Promise<boolean> {
    try {
      // Đăng ký tại https://formspree.io/ để lấy form ID
      const formID = 'your_formspree_id';
      
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);
      formData.append('_replyto', data.email);

      const response = await fetch(`https://formspree.io/f/${formID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      return response.ok;
    } catch (error) {
      console.error('Lỗi khi gửi email qua Formspree:', error);
      return false;
    }
  }

  // Cách 4: Gửi email trực tiếp qua mailto (mở client email)
  static openMailClient(data: EmailData): void {
    const subject = `Tin nhắn từ ${data.name} - Portfolio Contact`;
    const body = `Tên: ${data.name}\nEmail: ${data.email}\n\nNội dung:\n${data.message}`;
    
    const mailtoLink = `mailto:nguyenvangiakiet20.08@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
  }
}
