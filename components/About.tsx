'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import nécessaire pour l'image
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaterialIcon from './MaterialIcon';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      });
      
      gsap.from(".about-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={container} className="py-32 px-6 bg-[#050508] text-white">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
        
        {/* COLONNE GAUCHE : PHOTO */}
        <div className="w-full md:w-1/2 max-w-md mx-auto about-image relative">
            {/* Cadre décoratif arrière */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] translate-x-4 translate-y-4"></div>
            
            {/* Conteneur Image : Format Carré (aspect-square) */}
            <div className="relative w-full aspect-square bg-[#16161e] rounded-[2rem] overflow-hidden flex items-center justify-center border border-white/5 shadow-2xl group">
                
                {/* Image Next.js */}
                {/* Assurez-vous que votre fichier s'appelle bien 'portrait.png' ou 'portrait.jpg' dans le dossier public */}
                <Image 
                  src="/portrait.png" 
                  alt="Lamine Cissé"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Overlay gradient pour le texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Badge Pilote / Dev en bas de l'image */}
                <div className="absolute bottom-6 left-6 z-10">
                    <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-bold text-lg tracking-tight">Lamine Cissé</span>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-blue-400 bg-blue-900/20 px-2 py-1 rounded border border-blue-500/20 inline-block backdrop-blur-md">
                        Pilote & Lead Dev
                    </p>
                </div>
            </div>
        </div>

        {/* COLONNE DROITE : BIO */}
        <div className="w-full md:w-1/2">
          <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block about-content">
            Profil Pilote
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 about-content">
            La Rigueur de l'Aviation<br/>
            <span className="text-gray-500">Appliquée au Code.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 about-content">
            Mon parcours est atypique : de la tour de contrôle aux lignes de code. 
            J'ai appris que dans l'aviation comme dans le développement, la précision est vitale.
            Aujourd'hui, je construis des architectures digitales avec la même exigence de sécurité et de fiabilité qu'un plan de vol.
          </p>

          <div className="flex flex-wrap gap-3 about-content">
            {["Problem Solver", "Leadership", "Communication", "Gestion de Crise", "Mentorat"].map((skill, i) => (
               <span key={i} className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-bold uppercase tracking-widest text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default">
                 {skill}
               </span>
            ))}
          </div>
          
          <div className="mt-12 flex items-center gap-8 about-content">
             <div className="flex items-center gap-3">
                <MaterialIcon icon="work_history" size={32} className="text-blue-400" />
                <div>
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Années d'expérience</div>
                </div>
             </div>
             <div className="w-[1px] h-10 bg-white/10"></div>
             <div className="flex items-center gap-3">
                <MaterialIcon icon="assignment_turned_in" size={32} className="text-blue-400" />
                <div>
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Projets Livrés</div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}