import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  canonicalPath?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  schema?: Record<string, unknown>
}

const DEFAULT_TITLE = 'Triforion Technology'
const DEFAULT_DESC =
  'Triforion Technology | Software house penyedia pengembangan website profesional, aplikasi web custom, dan solusi digital untuk UMKM hingga enterprise.'
const DEFAULT_IMAGE = 'https://i.ibb.co.com/FkN6ssgh/logo.webp'
export const BASE_URL = 'https://triforiontech.pages.dev'

export function useSEO({
  title,
  description = DEFAULT_DESC,
  canonicalPath = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  schema,
}: SEOProps = {}) {
  useEffect(() => {
    const formattedTitle = title ? `${title} · Triforion` : DEFAULT_TITLE
    document.title = formattedTitle

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    )

    const cleanPath = canonicalPath ? (canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`) : ''
    const fullCanonical = `${BASE_URL}${cleanPath}` || `${BASE_URL}/`
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', fullCanonical)

    setMeta('property', 'og:title', formattedTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', fullCanonical)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', 'Triforion Technology')
    setMeta('property', 'og:locale', 'id_ID')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', formattedTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    let scriptEl = document.querySelector('script[data-dynamic-seo]') as HTMLScriptElement | null
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script')
        scriptEl.type = 'application/ld+json'
        scriptEl.setAttribute('data-dynamic-seo', 'true')
        document.head.appendChild(scriptEl)
      }
      scriptEl.textContent = JSON.stringify(schema)
    } else if (scriptEl) {
      scriptEl.remove()
    }

    return () => {
      const s = document.querySelector('script[data-dynamic-seo]')
      if (s) s.remove()
    }
  }, [title, description, canonicalPath, image, type, noindex, schema])
}
