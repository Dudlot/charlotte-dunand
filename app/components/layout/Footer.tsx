import AnimatedLink from '@/app/components/ui/AnimatedLink';

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-neutral-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-neutral-500 pb-4 flex gap-4 justify-center">
          <AnimatedLink href="https://www.linkedin.com/in/cdunand/">LinkedIn</AnimatedLink>
          <AnimatedLink href="https://www.instagram.com/charlotte_dunand/">Instagram</AnimatedLink>
          <AnimatedLink href="https://www.threads.com/@charlotte_dunand">Threads</AnimatedLink>
        </div>

        <div className="text-center text-neutral-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Charlotte Dunand. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
