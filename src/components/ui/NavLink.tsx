import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <li>
      <Link 
        href={href}
        onClick={onClick}
        className="relative isolate inline-block px-1 transition-colors duration-300 hover:text-white before:absolute before:inset-0 before:-z-10 before:bg-[var(--vin)] before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 hover:before:scale-y-100"
      >
        {children}
      </Link>
    </li>
  );
}