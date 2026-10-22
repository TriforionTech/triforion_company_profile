import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react'
import { getAllArticles } from '../data/articles'
import { useSEO } from '../hooks/useSEO'

export const BlogPage: React.FC = () => {
  useSEO({
    title: 'Blog & Wawasan',
    description:
      'Artikel, wawasan industri, dan analisis teknologi terkini seputar transformasi digital, pengembangan aplikasi, dan ekonomi pasar modal.',
    canonicalPath: '/blog',
    type: 'website',
  })

  const articles = getAllArticles()
  const featuredArticle = articles.find((a) => a.featured) || articles[0]
  const otherArticles = articles.filter((a) => a.slug !== featuredArticle?.slug)

  return (
    <>
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 bg-surface grid-pattern border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
              BLOG
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-[2rem] font-extrabold text-text-primary tracking-tight leading-tight">
              Wawasan &amp; <span className="gradient-text">Inspirasi</span>
            </h1>
            <p className="mt-2.5 text-sm sm:text-base text-text-secondary leading-relaxed">
              Artikel seputar teknologi, rekayasa perangkat lunak, dan analisis pasar untuk membantu bisnis Anda berkembang.
            </p>
            <Link
              to="/"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-muted hover:text-primary-600 transition-colors mt-4"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Kembali ke Beranda
            </Link>
          </motion.div>
        </div>
      </div>

      {featuredArticle && (
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                ARTIKEL SOROTAN
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Link
                to={`/blog/${featuredArticle.slug}`}
                className="group block bg-white rounded-2xl sm:rounded-3xl border border-border overflow-hidden hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  <div className="lg:col-span-7 min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-primary-800 text-xs font-bold rounded-full shadow-xs">
                        {featuredArticle.category}
                      </span>
                      <span className="px-2.5 py-1 bg-cta text-cta-text text-[11px] font-bold rounded-full shadow-xs">
                        FEATURED
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-text-muted mb-3.5">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary-500" />
                          {featuredArticle.readTime}
                        </span>
                        <span>•</span>
                        <span>{featuredArticle.date}</span>
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-text-primary tracking-tight leading-snug group-hover:text-primary-600 transition-colors mb-3">
                        {featuredArticle.title}
                      </h2>

                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 lg:line-clamp-4">
                        {featuredArticle.excerpt}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-bold">
                          {featuredArticle.author.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-text-primary truncate">{featuredArticle.author}</p>
                          <p className="text-[11px] text-text-muted truncate">{featuredArticle.authorRole}</p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-50 text-primary-700 group-hover:bg-primary-600 group-hover:text-white text-xs font-semibold rounded-xl transition-all duration-200">
                        Baca <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 lg:py-20 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-2">
              ARSIP
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              {otherArticles.length > 0 ? 'Artikel Lainnya' : 'Semua Artikel'}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(otherArticles.length > 0 ? otherArticles : articles).map((article) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-primary-800 text-[11px] font-semibold rounded-full shadow-xs">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-text-muted mb-2.5">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary-500" />
                          {article.readTime}
                        </span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>

                      <h3 className="text-base font-bold text-text-primary tracking-tight leading-snug group-hover:text-primary-600 transition-colors mb-2">
                        {article.title}
                      </h3>

                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-xs">
                      <span className="text-text-muted">{article.author}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-primary-600 group-hover:gap-2 transition-all">
                        Baca <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
