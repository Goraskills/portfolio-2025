'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const missions = [
  {
    org: "Dakar Institute of Technology",
    acronym: "DIT",
    role: "Instructeur No-Code",
    desc: "Formation des futurs ingénieurs aux paradigmes du développement visuel et de l'architecture logicielle moderne.",
    color: "border-blue-500/30",
    glow: "bg-blue-500/20",
    stat: "NIVEAU INGÉNIEUR"
  },
  {
    org: "African Aviation Inc.",
    acronym: "2AI",
    role: "Expert Digital Aviation",
    desc: "Digitalisation des processus aéronautiques. Introduction des outils No-Code dans un secteur à haute criticité.",
    color: "border-amber-500/30",
    glow: "bg-amber-500/20",
    stat: "SECTEUR AÉRO"
  },
  {
    org: "ForceN",
    acronym: "F.N",
    role: "Mentor Technique",
    desc: "Accélération des compétences numériques. Former une nouvelle génération de développeurs opérationnels immédiatement.",
    color: "border-emerald-500/30",
    glow: "bg-emerald-500/20",
    stat: "FORMATION PRO"
  }
];

export default function Transmission() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CORRECTION : On utilise fromTo pour forcer l'arrivée à l'état visible (autoAlpha: 1)
      gsap.fromTo(".mission-card", 
        { y: 50, autoAlpha: 0 }, // Départ : invisible et plus bas
        {
          y: 0,
          autoAlpha: 1, // Arrivée : 100% visible
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".transmission-grid",
            start: "top 85%", // Déclenche quand le haut de la grille est à 85% de l'écran
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-32 px-6 bg-black text-white relative border-t border-white/5">
      
      <div className="container mx-auto max-w-6xl">
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-800 pb-8">
          <div>
            <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-2 block">Knowledge Base</span>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Trans<span className="text-gray-500">mission</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-right mt-6 md:mt-0 text-sm">
            Partager l'expertise. Former l'élite technique de demain dans les institutions de référence.
          </p>
        </div>

        {/* GRILLE DES CARTES */}
        <div className="transmission-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((m, i) => (
            <div key={i} className={`mission-card relative bg-[#1a1a24] rounded-2xl p-8 border border-white/15 hover:bg-[#1c1c26] hover:border-white/25 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,255,255,0.08)] transition-all duration-300 group overflow-hidden min-h-[300px] flex flex-col justify-between shadow-xl shadow-black/40`}>
              
              {/* Effet de Glow au survol (Lumière d'ambiance) */}
              <div className={`absolute top-0 right-0 w-40 h-40 ${m.glow} blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                
                {/* Header Carte */}
                <div>
                  <div className="flex justify-between items-start mb-8">
                    {/* Acronyme Rond */}
                    <div className="w-16 h-16 rounded-full border border-white/10 bg-black flex items-center justify-center font-bold text-xl tracking-tighter text-white group-hover:scale-110 transition-transform duration-300">
                      {m.acronym}
                    </div>
                    {/* Badge */}
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${m.color} bg-white/5 text-gray-300`}>
                      {m.stat}
                    </span>
                  </div>
                  
                  {/* Titre (Blanc forcé) */}
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">{m.org}</h3>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">{m.role}</div>
                </div>

                {/* Footer Carte */}
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-6">
                    {m.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}