import 'material-symbols/sharp.css';

interface MaterialIconProps {
  icon: string;
  className?: string;
  size?: number;
}

export default function MaterialIcon({ icon, className = "", size = 24 }: MaterialIconProps) {
  return (
    <span 
      className={`material-symbols-sharp ${className}`}
      style={{ fontSize: size }}
    >
      {icon}
    </span>
  );
}
