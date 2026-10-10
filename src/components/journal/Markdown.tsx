import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

// Markdown classique (pas MDX) : accolades et chevrons dans le texte ne cassent pas la page.
// remark-gfm ajoute tableaux, texte barré et liens automatiques.
const options = { mdxOptions: { format: 'md' as const, remarkPlugins: [remarkGfm] } };

const components = {
  a: ({ href = '', children }: { href?: string; children?: React.ReactNode }) =>
    href.startsWith('/') ? (
      <Link href={href}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  // Images insérées dans le texte : dimensions inconnues, on garde une balise img classique
  img: ({ src, alt }: { src?: string; alt?: string }) =>
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ''} loading="lazy" />,
};

export default function Markdown({ source }: { source: string }) {
  if (!source) return null;
  return <MDXRemote source={source} options={options} components={components} />;
}
