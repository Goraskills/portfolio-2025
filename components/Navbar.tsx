'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Import nécessaire
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const pathname = usePathname(); // Pour savoir sur quelle page on est
  const router = useRouter();     // Pour naviguer

  // Gestion du fond noir au scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Menu Mobile
  useEffect(() => {
    if (isOpen) {
      gsap.to(".mobile-menu", { x: "0%", duration: 0.5, ease: "power3.out" });
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(".mobile-menu", { x: "100%", duration: 0.5, ease: "power3.in" });
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // FONCTION DE NAVIGATION INTELLIGENTE
  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);

    // Si on n'est pas sur la page d'accueil, on y retourne d'abord
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      // Sinon, on scrolle simplement (GSAP)
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: `#${sectionId}`, offsetY: 80 },
        ease: "power3.inOut"
      });
    }
  };

  const navLinks = [
    { label: 'À Propos', id: 'about' },
    { label: 'Parcours', id: 'flight-plan' },
    { label: 'Arsenal', id: 'tech-arsenal' },
    { label: 'Projets', id: 'projects' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 transition-all duration-500 flex justify-between items-center ${
          hasScrolled || pathname !== '/' ? 'py-4 bg-[#050508]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' : 'py-8 bg-transparent'
        }`}
      >
        <div 
          onClick={() => handleNavigation('hero')}
          className="font-bold text-xl tracking-tighter uppercase text-white z-50 relative cursor-pointer hover:text-blue-400 transition-colors"
        >
          L. CISSÉ
        </div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <span 
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`cursor-pointer transition-all duration-300 relative group ${
                activeSection === link.id && pathname === '/' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-400 transition-all duration-300 ${
                activeSection === link.id && pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNavigation('contact')}
              className="hidden md:block px-5 py-2 border border-white/30 rounded-full text-[10px] uppercase tracking-widest font-bold text-white hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all duration-300"
            >
              Contact
            </button>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-end gap-1.5"
            >
                <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
                <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6'}`}></span>
                <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className="mobile-menu fixed inset-0 bg-[#050508] z-40 transform translate-x-full flex flex-col justify-center items-center gap-8">
        {navLinks.map((link) => (
            <span 
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className="text-3xl font-bold uppercase tracking-tighter text-white hover:text-blue-500 transition-colors cursor-pointer"
            >
                {link.label}
            </span>
        ))}
        <button 
          onClick={() => handleNavigation('contact')}
          className="mt-4 px-8 py-3 border border-white/30 rounded-full text-sm uppercase tracking-widest font-bold text-white hover:bg-white hover:text-black transition-all"
        >
          Contact
        </button>
      </div>
    </>
  )
}