import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- OBLIGATOIRE pour Firebase Hosting (génère le dossier "out")
  images: {
    unoptimized: true, // Nécessaire pour l'export statique sans serveur d'images dédié
  },
};

export default nextConfig;