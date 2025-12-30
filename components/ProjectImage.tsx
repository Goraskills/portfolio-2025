'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className }: ProjectImageProps) {
  const [error, setError] = useState(false);

  // Si l'image est en erreur, on ne l'affiche pas (ce qui révélera le fallback derrière)
  if (error) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={() => setError(true)}
    />
  );
}