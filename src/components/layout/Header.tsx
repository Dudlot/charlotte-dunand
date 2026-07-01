'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/ui/NavLink';
import NavLinkDropdown from '@/components/ui/NavLinkDropdown';
import MobileNavAccordion from '@/components/ui/MobileNavAccordion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const servicesLinks = [
    { href: '/fondations-digitales', label: 'Fondations digitales' },
    { href: '/ingenierie-automatisation', label: 'Ingénierie & Automatisations' },
    { href: '/suivi-evolution', label: 'Suivi & évolution' },
    { href: '/shop/audit-digital', label: 'Audit digital' },
  ];

  return (
    <header>
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/icone.svg" alt="Logo" width={40} height={40} />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 list-none">
              <NavLinkDropdown label="Services" subLinks={servicesLinks} />
              <NavLink href="/vision">Vision</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </ul>
          </nav>

          {/* Bouton burger mobile */}
          {!isOpen && (
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden z-50 text-white"
                aria-label="Ouvrir le menu"
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>
)}
        </div>
      </div>

      {/* Overlay mobile plein écran */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-40 bg-[var(--vin)] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
    isOpen ? 'translate-y-0' : '-translate-y-full'
  }`}
      >
        {/* Bouton fermer */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
          aria-label="Fermer le menu"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>

        {/* Liens centrés */}
        <ul className="flex flex-col gap-8 list-none text-center text-2xl text-white">
          <MobileNavAccordion label="Services" subLinks={servicesLinks} onLinkClick={() => setIsOpen(false)} />
          <NavLink href="/" onClick={() => setIsOpen(false)}>Vision</NavLink>
          <NavLink href="/" onClick={() => setIsOpen(false)}>Audit</NavLink>
          <NavLink href="/" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </ul>
      </div>
    </header>
  );
}