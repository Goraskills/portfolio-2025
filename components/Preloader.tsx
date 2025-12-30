'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const container = useRef(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsFinished(true)
      });

      // 1. Animation des textes techniques
      tl.to(".loader-text", {
        opacity: 1,
        duration: 0.1,
        stagger: 0.1
      })
      .to(".loader-text", {
        opacity: 0,
        duration: 0.1,
        stagger: 0.1,
        delay: 0.5
      })
      // 2. La barre de chargement se remplit
      .to(".loader-bar", {
        width: "100%",
        duration: 0.8,
        ease: "power2.inOut"
      })
      // 3. Le rideau se lève
      .to(container.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut"
      });

    }, container);

    return () => ctx.revert();
  }, []);

  // Une fois fini, on ne rend plus rien pour ne pas gêner le clic
  if (isFinished) return null;

  return (
    <div ref={container} className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center text-white">
      
      {/* Textes techniques qui clignotent */}
      <div className="font-mono text-xs uppercase tracking-widest absolute bottom-20 left-10 text-blue-500">
        <div className="loader-text opacity-0">System Check... OK</div>
        <div className="loader-text opacity-0">Radar Initialization... OK</div>
        <div className="loader-text opacity-0">Assets Loading... 100%</div>
      </div>

      {/* Gros Titre Central */}
      <div className="overflow-hidden mb-4">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
          Lamine Cissé
        </h1>
      </div>

      {/* Barre de progression */}
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="loader-bar w-0 h-full bg-blue-500"></div>
      </div>

    </div>
  );
}