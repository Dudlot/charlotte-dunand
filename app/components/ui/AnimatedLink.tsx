import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function AnimatedLink({ 
  href, 
  children, 
  className = '' 
}: AnimatedLinkProps) {
  return (
    <Link 
      href={href}
      className={`link-underline-slide ${className}`}
    >
      {children}
    </Link>
  );
}
