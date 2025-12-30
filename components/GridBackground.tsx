export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none select-none">
       {/* EXPLICATION TECHNIQUE :
          z-[1] : Place la grille AU-DESSUS du fond noir des sections (qui est z-0 par défaut)
                  mais EN-DESSOUS de vos textes/boutons (qui sont souvent z-10).
          opacity-5 : Très subtil (5%).
       */}
       
       {/* Grille Principale (Carrés de 50px) */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]"></div>

       {/* Vignette (Optionnel) : Assombrit les bords pour focusser le regard au centre */}
       <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508] opacity-80"></div>
    </div>
  );
}