import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  className = 'w-full h-auto'
}: ImageProps) {
  const imgWidth = width || 1200;
  const imgHeight = height || 800;

  return (
    <div className={className || 'w-full'}>
      <NextImage
        src={src}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        className="w-full h-auto rounded-b-xl"
      />
    </div>
  );
}
