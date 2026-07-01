import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      target={'target'}
      rel={'rel'}
      className="relative isolate inline-block px-6 py-3 rounded-2xl bg-transparent text-white font-medium uppercase mt-12 border border-white transition-colors duration-300 hover:text-white hover:border-[var(--vin)] overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[var(--vin)] before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 hover:before:scale-y-100"
    >
      {children}
    </Link>
  );
}