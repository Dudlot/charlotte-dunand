import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ArticleCard from '@/components/journal/ArticleCard';
import FeaturedArticle from '@/components/journal/FeaturedArticle';
import NewsletterSection from '@/components/journal/NewsletterSection';
import { getArticles } from '@/lib/journal';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Journal — Charlotte Dunand",
  description: "Méthodes, retours d'expérience et réflexions sur les sites web, l'automatisation et les systèmes qui font tourner les entreprises.",
  alternates: {
    types: { 'application/rss+xml': '/journal/rss.xml' },
  },
};

export default function Journal() {
  const [featured, ...others] = getArticles();

  return (
    <main>
        <section id="hero" className='gradient-primary'>
            <div className="container mx-auto text-white pb-18 px-8">
                <Header />

                <h1 className='pt-36'>Journal</h1>
                <h2 className='h5 max-w-3xl'>Méthodes, retours d&apos;expérience et réflexions sur le digital qui fait tourner les entreprises, sans les épuiser.</h2>
            </div>
        </section>

        <section id='articles'>
            <div className="container mx-auto py-28 px-8">
                {featured ? (
                    <>
                        <FeaturedArticle article={featured} />
                        {others.length > 0 && (
                            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 pt-28">
                                {others.map((article) => (
                                    <ArticleCard key={article.slug} article={article} />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <p className='text-center'>Les premiers articles arrivent très bientôt.</p>
                )}
            </div>
        </section>

        <NewsletterSection />

      <Footer />
    </main>
  );
}
