import React from 'react';
import { RetroButton } from './components/RetroButton';
import { WindowCard } from './components/WindowCard';
import { RetroInput } from './components/RetroInput';
import { RainbowText } from './components/RainbowText';
import { Marquee } from './components/Marquee';
import { GrooveDivider } from './components/GrooveDivider';
import { EmailService } from './services/emailService';

export default function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    setIsLoading(true);
    
    try {
      // Hiển thị thông tin đã nhập
      console.log('Thông tin liên hệ:', { name, email, message });
      
      // Thử các phương thức gửi email theo thứ tự ưu tiên
      let emailSent = false;
      
      // 1. Thử EmailJS (nếu đã cấu hình)
      emailSent = await EmailService.sendEmailJS({ name, email, message });
      
      // 2. Thử Formspree (nếu đã cấu hình)  
      // emailSent = await EmailService.sendFormspree({ name, email, message });
      
      // 3. Mở client email của người dùng (luôn hoạt động)
      if (!emailSent) {
        EmailService.openMailClient({ name, email, message });
        emailSent = true;
      }
      
      if (emailSent) {
        alert(`Cảm ơn ${name}! Thông tin của bạn đã được gửi.`);
        // Reset form chỉ khi gửi thành công
        const form = e.currentTarget;
        if (form) {
          form.reset();
        }
      } else {
        alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    } catch (error) {
      console.error('Lỗi khi gửi form:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          #C0C0C0,
          #C0C0C0 2px,
          #D3D3D3 2px,
          #D3D3D3 4px
        )`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* HERO SECTION */}
        <section id="hero" className="text-center py-16">
          <div className="mb-6">
            <RainbowText className="text-7xl">NGUYEN VAN GIA KIET</RainbowText>
          </div>
          <h2 className="text-3xl font-bold mb-4">SOFTWARE ENGINEER</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Building pixel-perfect web experiences with modern tech and a touch of nostalgia 🎮
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <RetroButton onClick={() => scrollToSection('projects')}>
              VIEW PROJECTS
            </RetroButton>
            <RetroButton variant="secondary" onClick={() => scrollToSection('contact')}>
              CONTACT ME
            </RetroButton>
          </div>
        </section>

        <Marquee>
          ⭐ OPEN TO WORK ⭐ FULL-STACK DEVELOPER ⭐ REACT • NODE.JS • TYPESCRIPT ⭐ BUILDER OF COOL STUFF ⭐
        </Marquee>

        {/* HIT COUNTER STATS */}
        <div className="my-12 flex justify-center gap-8">
          <div
            className="border-2 bg-black text-[#00FF00] px-6 py-3 font-mono"
            style={{
              borderTopColor: '#808080',
              borderLeftColor: '#808080',
              borderRightColor: '#FFFFFF',
              borderBottomColor: '#FFFFFF',
            }}
          >
            <div className="text-sm">YEARS CODING</div>
            <div className="text-3xl font-bold">01</div>
          </div>
          <div
            className="border-2 bg-black text-[#00FF00] px-6 py-3 font-mono"
            style={{
              borderTopColor: '#808080',
              borderLeftColor: '#808080',
              borderRightColor: '#FFFFFF',
              borderBottomColor: '#FFFFFF',
            }}
          >
            <div className="text-sm">PROJECTS BUILT</div>
            <div className="text-3xl font-bold">02</div>
          </div>
          <div
            className="border-2 bg-black text-[#00FF00] px-6 py-3 font-mono"
            style={{
              borderTopColor: '#808080',
              borderLeftColor: '#808080',
              borderRightColor: '#FFFFFF',
              borderBottomColor: '#FFFFFF',
            }}
          >
            <div className="text-sm">VISITORS</div>
            <div className="text-3xl font-bold">999+</div>
          </div>
        </div>

        <GrooveDivider />

        {/* ABOUT SECTION */}
        <section id="about" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-[#000080] text-white px-4 py-2">ABOUT ME</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <WindowCard title="bio.txt">
              <p className="mb-4">
                Hey there! I'm Kiet, a passionate software engineer who loves turning coffee into code.
                I specialize in building scalable web applications with a focus on clean architecture
                and delightful user experiences.
              </p>
              <p className="mb-4">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open source,
                or playing retro video games (hence this website's aesthetic 😄).
              </p>
              <p>
                I believe in writing code that's not just functional, but also maintainable and well-documented.
                Let's build something amazing together!
              </p>
            </WindowCard>

            <WindowCard title="skills.exe">
              <div className="space-y-4">
                <div>
                  <div className="font-bold mb-2 border-b-2 border-black pb-1">💻 FRONTEND</div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'].map(skill => (
                      <span key={skill} className="bg-[#C0C0C0] border-2 border-black px-3 py-1 font-mono text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-2 border-b-2 border-black pb-1">⚙️ BACKEND</div>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', '.NET', 'MongoDB', 'SQL Server'].map(skill => (
                      <span key={skill} className="bg-[#C0C0C0] border-2 border-black px-3 py-1 font-mono text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-2 border-b-2 border-black pb-1">🛠️ TOOLS</div>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'CI/CD', 'Figma'].map(skill => (
                      <span key={skill} className="bg-[#C0C0C0] border-2 border-black px-3 py-1 font-mono text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </WindowCard>
          </div>
        </section>

        <GrooveDivider />

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-[#FF0000] text-[#FFFF00] px-4 py-2 border-4 border-black">
              ★ FEATURED PROJECTS ★
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <WindowCard title="Movie App" badge="NEW!">
              <div className="space-y-3">
                <p className="font-bold text-lg">Movie Watch Platform</p>
                <p className="text-sm">
                  This website was developed to allow users to explore, search, and view detailed movie information via API, 
                  with a modern and responsive interface. The application focuses on a smooth user experience, 
                  displaying dynamic movie lists and optimizing frontend performance.
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                  {['React', 'Nextjs', 'Nodejs', 'MongoDB'].map(tech => (
                    <span key={tech} className="bg-[#FFFF00] border border-black px-2 py-0.5 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://hopphim.vercel.app"
                    className="text-[#0000FF] underline hover:text-[#FF0000] font-bold"
                  >
                    DEMO
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/NguyenVanGiaKiet/Movie-App"
                    className="text-[#0000FF] underline hover:text-[#FF0000] font-bold"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </WindowCard>

            <WindowCard title="Real-time Chat App">
              <div className="space-y-3">
                <p className="font-bold text-lg">WebSocket-based messaging platform</p>
                <p className="text-sm">
                  This project aims to develop a real-time chat application that allows users to send instant messages, 
                  update status, and interact directly via WebSocket/Socket-based communication. 
                  The focus is on real-time data processing, optimizing user experience, 
                  and building a seamless frontend-backend connection.
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                  {['React', 'Socket.io', 'Node.js', 'MongoDB'].map(tech => (
                    <span key={tech} className="bg-[#FFFF00] border border-black px-2 py-0.5 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://nexchat-realtime.vercel.app"
                    className="text-[#0000FF] underline hover:text-[#FF0000] font-bold"
                  >
                    DEMO
                  </a>
                  <span>|</span>
                  <a
                    href="https://github.com/NguyenVanGiaKiet/Chat-App-Realtime"
                    className="text-[#0000FF] underline hover:text-[#FF0000] font-bold"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
            </WindowCard>
          </div>
        </section>

        <GrooveDivider />

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-[#00FFFF] text-black px-4 py-2 border-4 border-black">
              WORK EXPERIENCE
            </span>
          </h2>
          <WindowCard title="career.log">
            <div className="space-y-6">
              <div
                className="p-4 border-2 bg-[#FFFFCC]"
                style={{
                  borderTopColor: '#FFFFFF',
                  borderLeftColor: '#FFFFFF',
                  borderRightColor: '#808080',
                  borderBottomColor: '#808080',
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">IT Support Intern</h3>
                    <p className="text-sm">Cao Su Kenda Company</p>
                  </div>
                  <span className="bg-black text-[#00FF00] px-3 py-1 font-mono text-sm">MARCH - JUNE 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Installed and configured printers</li>
                  <li>Installed and set up Windows 10 and Windows 11</li>
                  <li>Installed Microsoft Office 2016 for office use</li>
                  <li>Provided technical support for the production system</li>
                  <li>Set up and configured computers for office staff</li>
                </ul>
              </div>
            </div>
          </WindowCard>
        </section>

        <GrooveDivider />

        {/* CONTACT SECTION */}
        <section id="contact" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-[#FF00FF] text-white px-4 py-2 border-4 border-black">
              GET IN TOUCH
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <WindowCard title="contact.form">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-bold mb-2">NAME:</label>
                  <RetroInput type="text" name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="block font-bold mb-2">EMAIL:</label>
                  <RetroInput type="email" name="email" placeholder="your.email@example.com" required />
                </div>
                <div>
                  <label className="block font-bold mb-2">MESSAGE:</label>
                  <RetroInput type="textarea" name="message" placeholder="Your message here..." rows={6} required />
                </div>
                <RetroButton type="submit" disabled={isLoading}>
                  {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                </RetroButton>
              </form>

              <div className="mt-8 pt-8 border-t-2 border-black">
                <p className="font-bold mb-4">OR FIND ME ON:</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/NguyenVanGiaKiet"
                    className="text-[#0000FF] underline hover:text-[#FF0000] font-bold visited:text-[#800080]"
                  >
                    GitHub
                  </a>
                  
                  <span>|</span>
                  <a
                    href="https://www.facebook.com/giakiet203XD"
                    className="text-[#0000FF] underline hover:text-[#FF0000] font-bold visited:text-[#800080]"
                  >
                    Facebook
                  </a>
                  <span>|</span>
                  <a
                    href="mailto:nguyenvangiakiet20.08@gmail.com"
                    className="text-[#0000FF] underline hover:text-[#FF0000] font-bold visited:text-[#800080]"
                  >
                    Email
                  </a>
                </div>
              </div>
            </WindowCard>
          </div>
        </section>

        {/* FOOTER - CONSTRUCTION STRIPE */}
        <footer
          className="py-8 text-center border-y-8 border-black"
          style={{
            background: 'repeating-linear-gradient(45deg, #FFFF00, #FFFF00 20px, #000000 20px, #000000 40px)',
          }}
        >
          <div className="bg-[#C0C0C0] inline-block px-8 py-4 border-4 border-black">
            <p className="font-bold text-xl mb-2">⚠️ UNDER CONSTRUCTION ⚠️</p>
            <p className="text-sm">© 2026 Nguyen Van Gia Kiet • Built with React & Nostalgia</p>
          </div>
        </footer>
      </div>
    </div>
  );
}