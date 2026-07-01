// src/components/ui/NavLinkDropdown.tsx
'use client';

import Link from 'next/link';

interface SubLink {
  href: string;
  label: string;
}

interface NavLinkDropdownProps {
  label: string;
  subLinks: SubLink[];
}

export default function NavLinkDropdown({ label, subLinks }: NavLinkDropdownProps) {
  return (
    <li className="relative group">
      <span className="relative isolate inline-block px-1 transition-colors text-white duration-300 hover:text-white before:absolute before:inset-0 before:-z-10 before:bg-[var(--vin)] before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 group-hover:before:scale-y-100 cursor-pointer">
        {label}
      </span>

      <ul className="absolute top-full left-0 mt-2 min-w-[220px] bg-[var(--vin)] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 list-none z-50">
        {subLinks.map((sub) => (
          <li key={sub.href}>
            <Link
              href={sub.href}
              className="block px-4 py-3 text-white hover:bg-white/10 transition-colors text-sm"
            >
              {sub.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}