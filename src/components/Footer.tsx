import React from 'react';
import { Instagram, Facebook, Linkedin, X } from 'lucide-react';

const FooterLink = ({ href = "#", children }: { href?: string, children: React.ReactNode }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors text-sm">
    {children}
  </a>
);

const SocialIcon = ({ icon: Icon }: { icon: any }) => (
  <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
    <Icon size={14} />
  </a>
);

export const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-6 pb-8 pt-0 relative z-20">
      <div className="max-w-7xl mx-auto bg-[#050505] border border-white/10 rounded-[32px] overflow-hidden">
        
        <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-black rounded-full"></div>
                <div className="absolute top-1 left-1 w-2 h-2 bg-blue-300 rounded-full blur-[1px] opacity-70"></div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Fusion AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Fusion AI and let AI handle your routine tasks.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2">Main Page</h4>
            <FooterLink>Home</FooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Pricing</FooterLink>
            <FooterLink>Blogs</FooterLink>
            <FooterLink>Contact</FooterLink>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2">Quick Links</h4>
            <FooterLink>Integration</FooterLink>
            <FooterLink>Teams</FooterLink>
            <FooterLink>Career</FooterLink>
            <FooterLink>FAQ</FooterLink>
            <FooterLink>404</FooterLink>
          </div>

          {/* Links Column 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium mb-2">Others</h4>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms & Condition</FooterLink>
            <FooterLink>Waitlist</FooterLink>
            <FooterLink>Changelog</FooterLink>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 p-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            © 2025 Design & Developed by Amani Design
          </p>
          
          <div className="flex items-center gap-4">
            <SocialIcon icon={Instagram} />
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={X} />
            <SocialIcon icon={Linkedin} />
          </div>
        </div>

      </div>
    </footer>
  );
};
