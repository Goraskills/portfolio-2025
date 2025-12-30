import Link from 'next/link';
// Import du composant Image Client qui gère les erreurs
import ProjectImage from '@/components/ProjectImage'; 
import MaterialIcon from '@/components/MaterialIcon';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';

// 1. BASE DE DONNÉES AVEC NOUVEAUX CHEMINS D'IMAGES
const projectsDB: Record<string, any> = {
  "lemultiservice": {
    title: "LeMultiservice",
    tagline: "L'Écosystème B2B Unifié",
    year: "2024",
    role: "Founder & CTO",
    // CHEMIN MIS À JOUR ICI :
    image: "/images/projects/lemultiservice.jpg", 
    desc: "Une plateforme d'agrégation de services digitaux conçue pour le marché ouest-africain. Elle fusionne une interface de gestion de bornes interactives, un système de distribution de services financiers et une API unifiée pour les tiers.",
    challenges: "Le défi majeur était la synchronisation en temps réel entre le hardware (bornes) et le cloud dans des zones à connectivité instable.",
    stack: ["Bubble.io", "Xano", "Stripe Connect", "Hardware IoT"],
    stats: [
      { label: "Utilisateurs", value: "10k+", icon: "group" },
      { label: "Volume", value: "50M", icon: "payments" },
      { label: "Uptime", value: "99.9%", icon: "dns" }
    ]
  },
  "providence": {
    title: "Providence",
    tagline: "Assurance Digitale API-First",
    year: "2023",
    role: "Lead Developer",
    // CHEMIN MIS À JOUR ICI :
    image: "/images/projects/providence.jpg",
    desc: "Refonte complète du core-system d'un courtier en assurance. L'architecture monolithique a été migrée vers une approche micro-services API-First, permettant l'intégration de partenaires distributeurs en moins de 24h.",
    challenges: "Assurer la migration des données historiques sans interruption de service et garantir la conformité RGPD/CIMA.",
    stack: ["Node.js", "React Admin", "PostgreSQL", "Docker"],
    stats: [
      { label: "Contrats/Jour", value: "500+", icon: "description" },
      { label: "Partenaires", value: "12", icon: "handshake" },
      { label: "Latence API", value: "45ms", icon: "speed" }
    ]
  },
  "borne-tactile": {
    title: "Borne Tactile",
    tagline: "Hardware d'Inclusion Numérique",
    year: "2022",
    role: "Product Designer",
    // CHEMIN MIS À JOUR ICI :
    image: "/images/projects/borne.jpg",
    desc: "Conception et déploiement d'un réseau de bornes physiques connectées. Ces terminaux permettent aux populations non-bancarisées d'accéder aux services digitaux essentiels (paiement factures, transfert d'argent) en libre-service.",
    challenges: "Concevoir une interface UX adaptée à des utilisateurs peu familiers avec le numérique (illettrisme technologique).",
    stack: ["Android Kiosk", "IoT Telemetry", "Solar Power", "4G"],
    stats: [
      { label: "Unités", value: "150", icon: "router" },
      { label: "Couverture", value: "Rural", icon: "map" },
      { label: "Impact", value: "High", icon: "trending_up" }
    ]
  }
};

// 2. GÉNÉRATION DES ROUTES STATIQUES
export async function generateStaticParams() {
  return [
    { id: 'lemultiservice' },
    { id: 'providence' },
    { id: 'borne-tactile' }
  ];
}

// 3. PAGE PRINCIPALE
export default async function ProjectDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = projectsDB[params.id];

  if (!project) return null;

  return (
    <main className="min-h-screen bg-[#050508] text-white selection:bg-blue-500/30">
      <ScrollToTop />
      <Navbar />

      {/* SECTION HERO */}
      <section className="relative pt-40 pb-20 px-6 md:px-24 border-b border-white/5">
        
        <Link href="/#projects" className="absolute top-28 left-6 md:left-24 group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors z-20">
          <div className="p-2 rounded-full border border-white/10 group-hover:border-white transition-colors">
             <MaterialIcon icon="arrow_back" size={16} />
          </div>
          <span>Retour</span>
        </Link>

        <div className="max-w-5xl mt-12">
          <div className="flex items-center gap-6 mb-8">
             <span className="px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-widest font-bold">
               {project.year}
             </span>
             <div className="h-[1px] w-8 bg-white/10"></div>
             <span className="text-gray-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
               <MaterialIcon icon="person" size={16} className="text-gray-600" />
               {project.role}
             </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6 text-white">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* SECTION CONTENU */}
      <section className="py-24 px-6 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* GAUCHE : DATAS */}
        <div className="lg:col-span-4 space-y-12">
            <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                    <MaterialIcon icon="analytics" size={16} /> Métriques Clés
                </h3>
                <div className="grid grid-cols-1 gap-4">
                    {project.stats.map((stat: any) => (
                        <div key={stat.label} className="p-5 bg-[#1a1a24] rounded-2xl border border-white/5 flex items-center justify-between group hover:border-white/10 transition-colors">
                            <div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-[10px] uppercase text-gray-500 tracking-wider">{stat.label}</div>
                            </div>
                            <MaterialIcon icon={stat.icon} className="text-gray-700 group-hover:text-blue-500 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                    <MaterialIcon icon="layers" size={16} /> Arsenal Technique
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                        <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono uppercase tracking-wide">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* DROITE : CONTENU */}
        <div className="lg:col-span-8">
            <div className="mb-16">
                <h3 className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-4">Mission</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {project.desc}
                </p>
            </div>

            {/* ZONE IMAGE */}
            <div className="w-full aspect-video bg-[#1a1a24] rounded-3xl border border-white/10 relative overflow-hidden group mb-16 shadow-2xl">
                
                {/* Image sécurisée */}
                <ProjectImage 
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                   <MaterialIcon icon="image" size={48} className="text-white/10" />
                </div>
                
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
            </div>

            <div className="p-8 border border-white/10 rounded-3xl bg-[#0A0A0E]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                    <MaterialIcon icon="psychology" size={18} className="text-gray-400" />
                    Défi Technique
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    {project.challenges}
                </p>
            </div>
        </div>
      </section>
    </main>
  );
}