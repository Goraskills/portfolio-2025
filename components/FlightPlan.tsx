'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Suppression des dates, focus sur l'étape
const waypoints = [
  {
    code: "PHASE I",
    title: "Faculté des Sciences",
    role: "Fondations Analytiques",
    desc: "Acquisition de la méthodologie scientifique. Structuration de la pensée complexe et analyse de données.",
    tags: ["Mathématiques", "Logique", "Rigueur"]
  },
  {
    code: "PHASE II",
    title: "Aviation Civile",
    role: "TAC Exploitation",
    desc: "Gestion d'opérations critiques. Environnement à haute pression où la sécurité et la précision sont absolues.",
    tags: ["Opérations", "Procédures", "Gestion de Crise"]
  },
  {
    code: "PHASE III",
    title: "Architecture No-Code",
    role: "Expert API & Automation",
    desc: "Conception de backends complexes pour le secteur assurantiel. Développement d'APIs robustes et scalables.",
    tags: ["Architecture", "API REST", "Systèmes Distribués"]
  },
  {
    code: "ACTUEL",
    title: "LeMultiservice",
    role: "Fondateur & CEO",
    desc: "Création d'un écosystème B2B complet. Fusion du hardware (bornes) et du software (Super App) pour digitaliser le marché.",
    tags: ["Product Design", "Hardware IoT", "Business Strategy"]
  }
];

export default function FlightPlan() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ligne centrale
      gsap.from(".flight-line-fill", {
        height: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: ".flight-track",
          start: "top center",
          end: "bottom center",
          scrub: 0.5
        }
      });

      // Cartes qui apparaissent
      const cards = gsap.utils.toArray('.waypoint-card');
      cards.forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          x: -20, // Mouvement horizontal léger
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="flight-plan" ref={container} className="min-h-screen bg-black text-white py-32 px-4 md:px-0 relative overflow-hidden">
      
      {/* Titre */}
      <div className="container mx-auto px-6 mb-24 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
          Trajectoire <span className="text-blue-600">.</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto flight-track px-4">
        
        {/* Ligne gauche (Design plus épuré type timeline) */}
        <div className="absolute left-8 md:left-0 top-0 bottom-0 w-[1px] bg-gray-800">
          <div className="flight-line-fill w-full bg-blue-500 h-full origin-top box-shadow-[0_0_10px_blue]"></div>
        </div>

        <div className="space-y-20 pl-16 md:pl-12">
          {waypoints.map((wp, index) => (
            <div key={index} className="waypoint-card relative group">
              
              {/* Point sur la ligne */}
              <div className="absolute left-[-41px] md:left-[-57px] top-1 w-3 h-3 rounded-full bg-black border border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300"></div>

              {/* Header : Code Phase */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-blue-500 font-mono text-xs tracking-[0.2em] font-bold">
                    {wp.code}
                </span>
                <div className="h-[1px] w-8 bg-gray-800"></div>
              </div>

              {/* Titre & Description */}
              <h3 className="text-3xl md:text-4xl font-bold uppercase text-white mb-2">{wp.title}</h3>
              <div className="text-sm text-gray-400 font-mono uppercase tracking-widest mb-4">{wp.role}</div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-2xl border-l-2 border-gray-800 pl-4">
                {wp.desc}
              </p>

              {/* TAGS PILULE MODERNISÉS (Image 8 style) */}
              <div className="flex flex-wrap gap-3">
                {wp.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider border border-white/15 bg-white/5 px-4 py-2 rounded-full text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}