import { formatDate } from '@/lib/journal';

interface ArticleMetaProps {
  tag: string;
  date: string;
  readingTime: number;
  className?: string;
}

export default function ArticleMeta({ tag, date, readingTime, className = '' }: ArticleMetaProps) {
  return (
    <p className={`journal-meta ${className}`}>
      <span className="font-semibold uppercase">{tag}</span>
      <span aria-hidden="true"> · </span>
      <time dateTime={date}>{formatDate(date)}</time>
      <span aria-hidden="true"> · </span>
      <span>{readingTime} min de lecture</span>
    </p>
  );
}
