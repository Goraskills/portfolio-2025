'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaterialIcon from './MaterialIcon';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "lemultiservice",
    title: "LeMultiservice",
    cat: "ECOSYSTEME",
    desc: "Plateforme B2B révolutionnaire intégrant services financiers, bornes tactiles et API unifiée.",
    image: "/images/projects/lemultiservice.jpg", // NOUVEAU CHEMIN
    color: "bg-[#1A1A1A]", 
    accent: "border-blue-500/30 bg-blue-500/10 text-blue-300"
  },
  {
    id: "providence",
    title: "Providence",
    cat: "FINTECH API",
    desc: "Architecture API scalable pour l'automatisation de la distribution de produits d'assurance.",
    image: "/images/projects/providence.jpg", // NOUVEAU CHEMIN
    color: "bg-[#1A1A1A]",
    accent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
  },
  {
    id: "borne-tactile",
    title: "Borne Tactile",
    cat: "HARDWARE IOT",
    desc: "Interface physique déployée en zones rurales pour l'accès aux services essentiels.",
    image: "/images/projects/borne.jpg", // NOUVEAU CHEMIN
    color: "bg-[#1A1A1A]",
    accent: "border-purple-500/30 bg-purple-500/10 text-purple-300"
  }
];

// ... Le reste du fichier ProjectShowcase reste identique ...
export default function ProjectShowcase() {
  // ... (Garder le code existant ici)
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card-wrapper');
      
      cards.forEach((card: any) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top", 
          pin: true, 
          pinSpacing: false,
          endTrigger: ".projects-end",
          end: "bottom bottom", 
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={container} className="bg-black text-white relative py-20">
      
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
          Grands <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Projets</span>
        </h2>
      </div>

      <div className="projects-feed relative pb-[10vh]"> 
        {projects.map((p, i) => (
          <div key={i} className="project-card-wrapper h-screen w-full sticky top-0 flex items-center justify-center p-4 z-10">
            
            <Link href={`/projects/${p.id}`} className="w-full max-w-5xl block group">
              <div className={`
                relative w-full h-[550px]
                ${p.color} 
                rounded-[3rem] 
                border border-white/10 border-t-white/20 
                shadow-[0_-10px_40px_rgba(0,0,0,0.5)] 
                overflow-hidden 
                flex flex-col justify-between p-8 md:p-14
                origin-top transition-transform duration-500
              `}
              style={{ 
                  top: 40 + (i * 20), 
                  transform: `scale(${0.9 + (i * 0.05)})`,
                  zIndex: i + 1
              }} 
              >
                
                {/* IMAGE DE FOND */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* CONTENU */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className={`px-4 py-2 rounded-full border ${p.accent} backdrop-blur-md text-[10px] font-bold uppercase tracking-widest shadow-lg`}>
                    PROJET 0{i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center cursor-pointer group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <MaterialIcon icon="arrow_outward" size={22} />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight text-white drop-shadow-lg">{p.title}</h3>
                  <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
                      <p className="text-gray-200 text-lg max-w-lg drop-shadow-md font-medium">{p.desc}</p>
                      <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                        {p.cat}
                      </div>
                  </div>
                </div>

                <div className="absolute right-0 bottom-0 w-[60%] h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none z-0"></div>
                
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="projects-end h-[50vh]"></div>
    </section>
  );
}