'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Suivre la souris
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, // Légère latence pour l'effet "organique"
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Effet au clic
    const clickAnim = () => {
      gsap.fromTo(cursor, 
        { scale: 0.8 }, 
        { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.3)" }
      );
    };
    window.addEventListener('mousedown', clickAnim);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', clickAnim);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <div className="w-1 h-1 bg-white rounded-full"></div>
    </div>
  );
}