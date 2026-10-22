import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Tag, Calendar, Clock, ArrowRight, Share2 } from 'lucide-react'
import { getArticleBySlug, getAllArticles } from '../data/articles'
import { useSEO, BASE_URL } from '../hooks/useSEO'

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const article = slug ? getArticleBySlug(slug) : undefined

  const articleSchema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.excerpt,
        image: article.image,
        datePublished: article.date,
        author: {
          '@type': 'Person',
          name: article.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Triforion Technology',
          logo: {
            '@type': 'ImageObject',
            url: 'https://i.ibb.co.com/FkN6ssgh/logo.webp',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/blog/${article.slug}`,
        },
      }
    : undefined

  useSEO({
    title: article ? article.title : 'Artikel Tidak Ditemukan',
    description: article?.excerpt,
    canonicalPath: article ? `/blog/${article.slug}` : '/blog',
    image: article?.image,
    type: 'article',
    noindex: !article,
    schema: articleSchema,
  })

  const allArticles = getAllArticles()
  const relatedArticles = article
    ? allArticles.filter((a) => a.slug !== article.slug).slice(0, 2)
    : []

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(article?.title || '')

    if (platform === 'LinkedIn') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
    } else if (platform === 'Twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')
    } else if (platform === 'WhatsApp') {
      window.open(`https://wa.me/?text=${title}%20${url}`, '_blank')
    }
  }

  const handleConsultation = () => {
    navigate('/', { state: { scrollTo: 'kontak' } })
  }

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-text-primary">Artikel tidak ditemukan</h1>
        <p className="mt-2 text-sm text-text-secondary">
          Maaf, artikel yang Anda cari mungkin telah dipindahkan atau dihapus.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Blog
        </Link>
      </div>
    )
  }

  const authorInitials = article.author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          to="/blog"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-muted hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Kembali ke Blog
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted mb-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-700 rounded-full font-medium">
              <Tag className="w-3 h-3" /> {article.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {article.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-[2rem] font-extrabold text-text-primary tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed">
            {article.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-bold">
              {authorInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">{article.author}</p>
              <p className="text-xs text-text-muted">{article.authorRole}</p>
            </div>
          </div>
        </motion.div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary-500 to-primary-700">
          <img
            src={article.image}
            alt={article.title}
            width="1200"
            height="675"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className="prose prose-lg max-w-none text-text-secondary"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-10">
          <button
            type="button"
            onClick={handleConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-cta-text text-sm font-semibold rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-[0_4px_16px_rgba(255,198,46,0.3)] hover:shadow-[0_8px_32px_rgba(255,198,46,0.4)] hover:-translate-y-0.5 cursor-pointer border-none"
          >
            Konsultasi Gratis <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Share2 className="w-4 h-4" />
            <span>Bagikan artikel ini</span>
          </div>
          <div className="flex gap-2">
            {['LinkedIn', 'Twitter', 'WhatsApp'].map((platform) => (
              <button
                key={platform}
                onClick={() => handleShare(platform)}
                className="px-3 py-1.5 bg-surface border border-border rounded-lg text-xs font-medium text-text-secondary hover:bg-primary-50 hover:text-primary-500 hover:border-primary-200 transition-all cursor-pointer"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {relatedArticles.length > 0 && (
        <section className="mt-16 sm:mt-24 pt-16 pb-16 sm:pb-20 border-t border-border bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
                  REKOMENDASI BACAAN
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                  Artikel Terkait Lainnya
                </h2>
              </div>
              <Link
                to="/blog"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Lihat Semua Artikel <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-0.5 flex flex-col h-full"
                >
                  <div className="h-44 sm:h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-primary-800 text-[11px] font-semibold rounded-full shadow-xs">
                      {rel.category}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-text-muted mb-2.5">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {rel.readTime}
                        </span>
                        <span>•</span>
                        <span>{rel.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary-600 transition-colors leading-snug mb-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-xs">
                      <span className="text-text-muted">{rel.author}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-primary-600 group-hover:gap-2 transition-all">
                        Baca artikel <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
