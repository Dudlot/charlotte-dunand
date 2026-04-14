import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleFrontmatter {
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  image?: string;
  lang: string;
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
}

const JOURNAL_DIR = path.join(process.cwd(), "content/journal");

export function getArticles(): Article[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];

  const files = fs
    .readdirSync(JOURNAL_DIR)
    .filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(JOURNAL_DIR, filename);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      return {
        slug,
        frontmatter: data as ArticleFrontmatter,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
