import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ArticleCard from '@/components/journal/ArticleCard';
import ArticleCover from '@/components/journal/ArticleCover';
import ArticleFaq from '@/components/journal/ArticleFaq';
import ArticleMeta from '@/components/journal/ArticleMeta';
import Markdown from '@/components/journal/Markdown';
import NewsletterSection from '@/components/journal/NewsletterSection';
import PhotoCredit from '@/components/journal/PhotoCredit';
import { existingImage, getArticle, getArticles, toPlainText } from '@/lib/journal';
import { SITE_URL } from '@/lib/site';

import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};

  const { title, excerpt, date, tag } = article.frontmatter;
  const image = existingImage(article.frontmatter.image) ?? '/opengraph.jpg';

  return {
    title: `${title} | Charlotte Dunand`,
    description: excerpt,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      type: 'article',
      title,
      description: excerpt,
      publishedTime: date,
      authors: ['Charlotte Dunand'],
      tags: [tag],
      images: [{ url: image }],
    },
    twitter: { card: 'summary_large_image', title, description: excerpt, images: [image] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const { slug, frontmatter, readingTime, body, faq, afterFaq, cta } = article;
  const cover = existingImage(frontmatter.image, frontmatter.thumbnail);

  // À lire aussi : même tag en priorité, puis les plus récents
  const related = getArticles()
    .filter((a) => a.slug !== slug)
    .sort((a, b) => Number(b.frontmatter.tag === frontmatter.tag) - Number(a.frontmatter.tag === frontmatter.tag))
    .slice(0, 3);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: frontmatter.title,
      description: frontmatter.excerpt,
      datePublished: frontmatter.date,
      inLanguage: 'fr',
      url: `${SITE_URL}/journal/${slug}`,
      image: `${SITE_URL}${cover ?? '/opengraph.jpg'}`,
      author: { '@type': 'Person', name: 'Charlotte Dunand', url: SITE_URL },
      publisher: { '@type': 'Person', name: 'Charlotte Dunand', url: SITE_URL },
    },
    ...(faq.length
      ? [{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: toPlainText(answer) },
          })),
        }]
      : []),
  ];

  return (
    <main>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white pb-18 px-8">
                <Header />

                <Link href="/journal" className='journal-back inline-block pt-36'>← Journal</Link>
                <ArticleMeta tag={frontmatter.tag} date={frontmatter.date} readingTime={readingTime} className='pt-8' />
                <h1 className='journal-title max-w-4xl'>{frontmatter.title}</h1>
            </div>
        </section>

        <article className="container mx-auto px-8 pt-16 pb-28">
            <ArticleCover
                src={cover}
                alt=""
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="aspect-video max-w-6xl mx-auto"
                priority
            />
            {frontmatter.credit && <PhotoCredit {...frontmatter.credit} />}

            <div className="journal-content max-w-2xl mx-auto pt-16">
                <Markdown source={body} />

                {faq.length > 0 && (
                    <ArticleFaq
                        items={faq.map(({ question, answer }) => ({ question, answer: <Markdown source={answer} /> }))}
                    />
                )}

                <Markdown source={afterFaq} />

                {cta && (
                    <aside className="journal-cta">
                        <Markdown source={cta} />
                    </aside>
                )}
            </div>
        </article>

        {related.length > 0 && (
            <section id='related' className='border-t border-[var(--froid)]'>
                <div className="container mx-auto py-28 px-8">
                    <h2 className='h3 pb-12'>À lire aussi</h2>
                    <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map((a) => (
                            <ArticleCard key={a.slug} article={a} />
                        ))}
                    </div>
                </div>
            </section>
        )}

        <NewsletterSection />

      <Footer />
    </main>
  );
}
