import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export interface ArticleFrontmatter {
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  image?: string; // mise en avant, haut de l'article et partage (16:9)
  thumbnail?: string; // carte dans la grille (4:3)
  credit?: { author: string; authorUrl?: string; source?: string; sourceUrl?: string }; // crédit photo (masqué à l'écran)
  lang?: string;
  draft?: boolean;
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  readingTime: number;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface ArticleWithContent extends Article {
  body: string; // contenu avant la FAQ
  faq: FaqEntry[];
  afterFaq: string; // contenu entre la FAQ et l'encart final
  cta: string | null; // paragraphe après le dernier « --- »
}

const JOURNAL_DIR = path.join(process.cwd(), 'content/journal');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const FAQ_HEADING = /^## Questions fréquentes\s*$/m;

// Les brouillons (draft: true) ne sont visibles qu'en local
const showDrafts = process.env.NODE_ENV !== 'production' || process.env.JOURNAL_SHOW_DRAFTS === '1';

function readingTime(content: string) {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function readArticleFile(filename: string) {
  const slug = filename.replace(/\.mdx?$/, '');
  const { data, content } = matter(fs.readFileSync(path.join(JOURNAL_DIR, filename), 'utf8'));
  return { slug, frontmatter: data as ArticleFrontmatter, content };
}

function listArticleFiles() {
  if (!fs.existsSync(JOURNAL_DIR)) return [];
  return fs.readdirSync(JOURNAL_DIR).filter((f) => /\.mdx?$/.test(f));
}

export function getArticles(): Article[] {
  return listArticleFiles()
    .map(readArticleFile)
    .filter(({ frontmatter }) => showDrafts || !frontmatter.draft)
    .map(({ slug, frontmatter, content }) => ({ slug, frontmatter, readingTime: readingTime(content) }))
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

// Sépare l'article en : corps, FAQ (« ## Questions fréquentes » + questions en « ### »), suite, encart final
function splitContent(content: string) {
  let main = content.trim();
  let cta: string | null = null;

  const lastRule = main.lastIndexOf('\n---\n');
  if (lastRule !== -1) {
    cta = main.slice(lastRule + 5).trim() || null;
    main = main.slice(0, lastRule).trim();
  }

  const faqMatch = FAQ_HEADING.exec(main);
  if (!faqMatch) return { body: main, faq: [], afterFaq: '', cta };

  const body = main.slice(0, faqMatch.index).trim();
  const rest = main.slice(faqMatch.index + faqMatch[0].length);
  const nextSection = rest.search(/^## /m);
  const faqBlock = nextSection === -1 ? rest : rest.slice(0, nextSection);
  const afterFaq = nextSection === -1 ? '' : rest.slice(nextSection).trim();

  const faq = faqBlock
    .split(/^### /m)
    .slice(1)
    .map((chunk) => {
      const [question, ...answer] = chunk.split('\n');
      return { question: question.trim(), answer: answer.join('\n').trim() };
    })
    .filter((entry) => entry.question && entry.answer);

  return { body, faq, afterFaq, cta };
}

export function getArticle(slug: string): ArticleWithContent | null {
  // On ne lit que des fichiers réellement présents dans le dossier (pas de chemin construit à partir de l'URL)
  const filename = listArticleFiles().find((f) => f.replace(/\.mdx?$/, '') === slug);
  if (!filename) return null;

  const { frontmatter, content } = readArticleFile(filename);
  if (frontmatter.draft && !showDrafts) return null;

  return { slug, frontmatter, readingTime: readingTime(content), ...splitContent(content) };
}

// Renvoie le chemin de l'image s'il existe dans /public, sinon null (couverture de remplacement)
export function existingImage(...candidates: (string | undefined)[]) {
  return candidates.find((src) => src && src.startsWith('/') && fs.existsSync(path.join(PUBLIC_DIR, src))) ?? null;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(`${date}T12:00:00`),
  );
}

// Texte brut (pour le JSON-LD et le RSS) : retire la syntaxe Markdown la plus courante
export function toPlainText(markdown: string) {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
