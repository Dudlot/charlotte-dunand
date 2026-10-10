import Link from 'next/link';
import ArticleCover from '@/components/journal/ArticleCover';
import ArticleMeta from '@/components/journal/ArticleMeta';
import { existingImage, type Article } from '@/lib/journal';

export default function FeaturedArticle({ article }: { article: Article }) {
  const { slug, frontmatter, readingTime } = article;

  return (
    <Link href={`/journal/${slug}`} className="journal-card group flex flex-col lg:flex-row gap-8 lg:items-center">
      <ArticleCover
        src={existingImage(frontmatter.image, frontmatter.thumbnail)}
        alt=""
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="aspect-video lg:flex-3"
        priority
      />
      <div className="lg:flex-2 flex flex-col gap-4">
        <p className="journal-label">Dernier article</p>
        <ArticleMeta tag={frontmatter.tag} date={frontmatter.date} readingTime={readingTime} />
        <h2 className="journal-featured-title">{frontmatter.title}</h2>
        <p className="journal-excerpt">{frontmatter.excerpt}</p>
        <span className="journal-read-more">Lire l&apos;article</span>
      </div>
    </Link>
  );
}
