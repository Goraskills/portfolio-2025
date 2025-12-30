'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animation d'entrée : Impact lourd et précis
      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      })
      .from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");

    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={component} className="h-screen w-full flex flex-col justify-center px-6 md:px-24 relative overflow-hidden bg-black">
      {/* Background : Grille technique subtile (Esprit Aviation/Science) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute left-[15%] h-full w-[1px] bg-white/20"></div>
        <div className="absolute left-[85%] h-full w-[1px] bg-white/20"></div>
        <div className="absolute top-[30%] w-full h-[1px] bg-white/10"></div>
        <div className="absolute top-[70%] w-full h-[1px] bg-white/10"></div>
      </div>

      <div className="z-10 mix-blend-difference">
        {/* TITRE MASSIf : On met en avant le NOM comme une MARQUE */}
        <h1 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.85] text-white">
          <div className="overflow-hidden"><span className="hero-line block">Lamine</span></div>
          <div className="overflow-hidden"><span className="hero-line block">Cissé</span></div>
          {/* Mot clé qui définit son univers, en gris pour le contraste */}
          <div className="overflow-hidden"><span className="hero-line block text-gray-600">Aviation.</span></div>
        </h1>
        
        {/* SOUS-TITRE : Technique et Précis */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6 hero-sub">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-white"></div>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-300">
              TAC Exploitation Aviation Civile
            </p>
          </div>
          
          <div className="hidden md:block h-1 w-1 bg-white rounded-full"></div>
          
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500">
             Sciences & Opérations
          </p>
        </div>      
      </div>
    </section>
  );
}