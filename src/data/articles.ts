import { marked } from 'marked'
import type { Article } from '../types'

const rawMarkdownModules = import.meta.glob('../content/articles/*.md', {
  query: '?raw',
  eager: true,
  import: 'default',
}) as Record<string, string>

interface FrontmatterData {
  slug?: string
  title?: string
  excerpt?: string
  category?: string
  date?: string
  readTime?: string
  image?: string
  author?: string
  authorRole?: string
  featured?: boolean | string
  [key: string]: unknown
}

function parseFrontmatter(raw: string): { data: FrontmatterData; content: string } {
  const clean = raw.replace(/^[\uFEFF\u200B\s]*---/, '---')
  const match = clean.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/)
  if (!match) {
    return { data: {}, content: clean }
  }

  const yamlLines = match[1].split(/\r?\n/)
  const data: FrontmatterData = {}

  for (const line of yamlLines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const key = line.slice(0, colonIndex).trim()
    let value: any = line.slice(colonIndex + 1).trim()

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    } else if (value.toLowerCase() === 'true') {
      value = true
    } else if (value.toLowerCase() === 'false') {
      value = false
    }

    data[key] = value
  }

  return { data, content: match[2].trim() }
}

export const articles: Article[] = Object.entries(rawMarkdownModules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const fallbackSlug = path.split('/').pop()?.replace(/\.md$/, '') || ''
    const slug = data.slug || fallbackSlug

    const htmlContent = marked.parse(content, {
      gfm: true,
      breaks: false,
    }) as string

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      category: data.category || 'Umum',
      date: data.date || '',
      readTime: data.readTime || '5 menit baca',
      image: data.image || '',
      author: data.author || 'Tim Triforion',
      authorRole: data.authorRole || 'Contributor',
      featured: Boolean(data.featured),
      content: htmlContent,
    }
  })
  .sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}

export type { Article }
