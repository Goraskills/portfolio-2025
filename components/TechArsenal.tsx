'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaterialIcon from './MaterialIcon';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { 
    id: "bubble",
    name: "Bubble", 
    cat: "FULLSTACK", 
    sub: "Apps Web Complexes",
    icon: "B",
    materialIcon: "public", 
    color: "from-blue-600 to-indigo-900", 
    span: "md:col-span-1",
    delay: 0.1
  },
  { 
    id: "xano",
    name: "Xano", 
    cat: "BACKEND API", 
    sub: "Logique Serveur & BDD",
    icon: "X",
    materialIcon: "storage", 
    color: "from-purple-600 to-violet-900",
    span: "md:col-span-1",
    delay: 0.2
  },
  { 
    id: "glide",
    name: "Glide", 
    cat: "MOBILE B2B", 
    sub: "Déploiement Rapide",
    icon: "G",
    materialIcon: "smartphone", 
    color: "from-emerald-500 to-teal-900",
    span: "md:col-span-1",
    delay: 0.3
  },
  { 
    id: "flutter",
    name: "FlutterFlow", 
    cat: "NATIVE", 
    sub: "iOS & Android Natif",
    icon: "F",
    materialIcon: "adb", 
    color: "from-orange-500 to-red-900",
    span: "md:col-span-1",
    delay: 0.4
  },
  { 
    id: "make",
    name: "Make", 
    cat: "AUTOMATION", 
    sub: "Orchestration & API",
    icon: "M",
    materialIcon: "settings_suggest", 
    color: "from-fuchsia-600 to-pink-900",
    span: "md:col-span-2",
    delay: 0.5
  },
  { 
    id: "firebase",
    name: "Firebase", 
    cat: "INFRA", 
    sub: "Temps Réel & Auth",
    icon: "Fi",
    materialIcon: "cloud", 
    color: "from-yellow-500 to-amber-900",
    span: "md:col-span-1",
    delay: 0.6
  }
];

export default function TechArsenal() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".bento-item", 
        { y: 50, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".bento-grid", start: "top 85%" }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tech-arsenal" ref={container} className="min-h-screen py-32 px-4 relative z-10 overflow-hidden bg-[#050508]">
      
      {/* Fond lumineux d'ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 border-b border-white/10 pb-8 flex items-end justify-between">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
            Arsenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech</span>
          </h2>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[220px]">
          
          {/* CARTE PRINCIPALE (Architecture) */}
          {/* CHANGEMENT ICI : rounded-3xl au lieu de rounded-2xl */}
          <div className="bento-item md:col-span-2 bg-[#1a1a24] rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-center min-h-[220px] shadow-2xl shadow-black/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-900/20 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div>
                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-200 text-[10px] uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  CORE EXPERTISE
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Architecture Système</h3>
                <p className="text-gray-300 text-sm max-w-md">
                  Conception d'écosystèmes digitaux complets. Une approche holistique : comprendre le business pour bâtir la solution technique parfaite.
                </p>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform">
                <MaterialIcon icon="account_tree" size={32} className="text-blue-400" />
              </div>
            </div>
          </div>

          {/* BOUCLE OUTILS */}
          {tools.map((tool, i) => (
            <div 
              key={i} 
              // CHANGEMENT ICI : rounded-3xl pour l'harmonie
              className={`bento-item ${tool.span} h-full bg-[#1a1a24] rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between min-h-[220px] shadow-xl shadow-black/40 border border-white/10 hover:border-white/20`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-5 group-hover:opacity-25 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all shadow-inner">
                    <MaterialIcon icon={tool.materialIcon} size={24} className="text-white" />
                  </div>
                  <span className="text-[9px] font-bold bg-white/5 border border-white/15 px-3 py-1 rounded-full uppercase tracking-wider text-gray-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 cursor-default">
                    {tool.cat}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-1 group-hover:translate-x-1 transition-transform">{tool.name}</h4>
                  <p className="text-xs text-gray-400 font-mono leading-tight group-hover:text-gray-200 transition-colors">{tool.sub}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}