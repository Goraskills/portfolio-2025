'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaterialIcon from './MaterialIcon';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: "GitHub", href: "#", icon: "code" },
  { label: "Twitter", href: "#", icon: "tag" },
  { label: "Instagram", href: "#", icon: "photo_camera" },
  { label: "Malt", href: "#", icon: "work" }
];

export default function Contact() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du titre
      gsap.from(".contact-title", {
        y: 100, opacity: 0, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: container.current, start: "top 70%" }
      });

      // Animation des liens
      gsap.from(".contact-link", {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.3,
        scrollTrigger: { trigger: container.current, start: "top 70%" }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={container} className="py-32 px-6 min-h-[80vh] flex flex-col justify-between bg-[#050508] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl text-center z-10 flex-grow flex flex-col justify-center">
        <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-6 block contact-link">
          Ready for Takeoff ?
        </span>
        
        <h2 className="contact-title text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12 text-white leading-[0.9]">
          Démarrons<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Le Projet.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 contact-link">
          <a 
            href="mailto:contact@laminecisse.com" 
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-2"
          >
            <MaterialIcon icon="mail" size={20} className="" />
            <span className="relative z-10">Me Contacter</span>
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>
          
          <a href="#" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <MaterialIcon icon="work" size={20} className="" />
            LinkedIn
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-white/5 pt-12 contact-link">
          {socialLinks.map((social) => (
            <SocialLink key={social.label} label={social.label} href={social.href} icon={social.icon} />
          ))}
        </div>
      </div>

      {/* LE PETIT FOOTER INTÉGRÉ ICI */}
      <div className="container mx-auto max-w-6xl mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest font-mono z-10">
        <span>© 2025 Lamine Cissé. All Rights Reserved.</span>
        <span>Dakar, Senegal</span>
      </div>

    </section>
  );
}

function SocialLink({ label, href, icon }: { label: string, href: string, icon: string }) {
  return (
    <a href={href} className="flex flex-col items-center gap-2 text-xs font-mono text-gray-500 hover:text-white hover:scale-105 uppercase tracking-widest transition-all duration-300 group">
      <MaterialIcon icon={icon} size={24} className="group-hover:scale-110 transition-transform" />
      {label}
    </a>
  );
}