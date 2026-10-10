import Link from 'next/link';
import ArticleCover from '@/components/journal/ArticleCover';
import ArticleMeta from '@/components/journal/ArticleMeta';
import { existingImage, type Article } from '@/lib/journal';

export default function ArticleCard({ article }: { article: Article }) {
  const { slug, frontmatter, readingTime } = article;

  return (
    <Link href={`/journal/${slug}`} className="journal-card group flex flex-col gap-4">
      <ArticleCover
        src={existingImage(frontmatter.thumbnail, frontmatter.image)}
        alt=""
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-[4/3]"
      />
      <ArticleMeta tag={frontmatter.tag} date={frontmatter.date} readingTime={readingTime} />
      <h3 className="journal-card-title">{frontmatter.title}</h3>
      <p className="journal-excerpt">{frontmatter.excerpt}</p>
      <span className="journal-read-more">Lire l&apos;article</span>
    </Link>
  );
}
