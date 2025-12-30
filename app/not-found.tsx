import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen w-full bg-[#050508] text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Fond Radar (Cerceaux animés) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[40vw] h-[40vw] border border-blue-900/30 rounded-full animate-ping absolute"></div>
        <div className="w-[60vw] h-[60vw] border border-blue-900/20 rounded-full animate-pulse absolute"></div>
        <div className="w-[80vw] h-[80vw] border border-blue-900/10 rounded-full absolute"></div>
      </div>

      <div className="z-10 text-center space-y-8 p-6">
        <div className="font-mono text-blue-500 text-sm uppercase tracking-[0.3em] animate-pulse">
          /// Error 404 ///
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
          Signal<br/>Perdu
        </h1>

        <p className="text-gray-400 font-mono text-xs max-w-md mx-auto leading-relaxed uppercase tracking-wide">
          La coordonnée demandée est hors de portée radar.
          <br/>Veuillez retourner à la base immédiatement.
        </p>

        <div className="pt-8">
          <Link 
            href="/" 
            className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 inline-block"
          >
            Retour Base
          </Link>
        </div>
      </div>

    </div>
  );
}