// Flux RSS du Journal : /journal/rss.xml (hors proxy next-intl, comme les autres fichiers .xml)
import { getArticles } from '@/lib/journal';
import { SITE_URL } from '@/lib/site';

function escapeXml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function GET() {
  const items = getArticles()
    .map(({ slug, frontmatter }) => {
      const url = `${SITE_URL}/journal/${slug}`;
      return `
    <item>
      <title>${escapeXml(frontmatter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${frontmatter.date}T08:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(frontmatter.tag)}</category>
      <description>${escapeXml(frontmatter.excerpt)}</description>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Journal — Charlotte Dunand</title>
    <link>${SITE_URL}/journal</link>
    <atom:link href="${SITE_URL}/journal/rss.xml" rel="self" type="application/rss+xml" />
    <description>Méthodes, retours d'expérience et réflexions sur le digital qui fait tourner les entreprises.</description>
    <language>fr</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
