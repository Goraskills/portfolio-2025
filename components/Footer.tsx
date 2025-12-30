'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const container = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animation simple : le texte suit un peu la souris (effet magnétique léger)
    const ctx = gsap.context(() => {
      container.current.addEventListener('mousemove', (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(textRef.current, {
          x: x,
          y: y,
          duration: 1,
          ease: "power2.out"
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={container} className="bg-black text-white py-40 px-6 relative overflow-hidden border-t border-gray-900">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center z-10 relative">
        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] mb-10">
          Prêt à décoller ?
        </p>

        {/* GROS TEXTE INTERACTIF */}
        <div className="group relative cursor-pointer overflow-hidden">
          <h2 
            ref={textRef}
            className="text-[10vw] md:text-[8vw] font-bold uppercase leading-[0.8] tracking-tighter transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600"
          >
            Lancer le<br/>Projet
          </h2>
          
          {/* Ligne qui apparaît en dessous */}
          <div className="w-0 h-1 bg-blue-500 mt-4 mx-auto group-hover:w-full transition-all duration-500 ease-out"></div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-mono uppercase tracking-widest w-full max-w-4xl border-t border-gray-800 pt-12">
          
          <div className="flex flex-col gap-4 text-gray-400">
            <span className="text-white font-bold">Socials</span>
            <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn ↗</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Twitter / X ↗</a>
          </div>

          <div className="flex flex-col gap-4 text-gray-400">
             <span className="text-white font-bold">Contact</span>
             <a href="mailto:contact@laminecisse.com" className="hover:text-white transition-colors">contact@laminecisse.com</a>
             <span>Dakar, Sénégal</span>
          </div>

          <div className="flex flex-col gap-4 text-gray-400">
            <span className="text-white font-bold">Lamine Cissé</span>
            <span>© 2025 Tous droits réservés.</span>
            <span className="text-[10px] text-gray-600">Architected with Next.js & GSAP</span>
          </div>

        </div>
      </div>
    </footer>
  );
}