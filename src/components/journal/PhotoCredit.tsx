interface PhotoCreditProps {
  author: string;
  authorUrl?: string;
  source?: string;
  sourceUrl?: string;
}

function CreditLink({ href, children }: { href?: string; children: React.ReactNode }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <>{children}</>
  );
}

// Crédit de la photo de couverture : présent dans le HTML, masqué à l'écran (sr-only)
export default function PhotoCredit({ author, authorUrl, source, sourceUrl }: PhotoCreditProps) {
  return (
    <p className="sr-only">
      Photo de <CreditLink href={authorUrl}>{author}</CreditLink>
      {source && (
        <>
          {' '}sur <CreditLink href={sourceUrl}>{source}</CreditLink>
        </>
      )}
    </p>
  );
}
