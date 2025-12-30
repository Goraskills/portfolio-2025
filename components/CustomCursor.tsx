'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursor = useRef(null);

  useEffect(() => {
    // Si on est sur un appareil tactile (optionnel, mais le CSS gère déjà l'affichage),
    // on évite d'ajouter les écouteurs pour la performance.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1, // Un peu de retard pour l'effet fluide
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    // AJOUT DE 'hidden md:block' ICI
    <div 
      ref={cursor}
      className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
}