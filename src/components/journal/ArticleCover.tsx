import Image from 'next/image';

interface ArticleCoverProps {
  src: string | null;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}

// Image de couverture recadrée dans son conteneur ; sans image, couverture aux couleurs du site
export default function ArticleCover({ src, alt, sizes, className = '', priority }: ArticleCoverProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="gradient-primary absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="h4 text-white/80">Journal</span>
        </div>
      )}
    </div>
  );
}
