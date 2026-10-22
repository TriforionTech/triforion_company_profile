import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tag, Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react'
import { getAllArticles } from '../data/articles'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export const BlogPage: React.FC = () => {
  useDocumentTitle('Blog & Wawasan')
  const articles = getAllArticles()
  const featuredArticles = articles.filter((a) => a.featured)

  return (
    <>
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-surface grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
              Artikel seputar teknologi, pengembangan web, dan dunia digital untuk membantu bisnis Anda tumbuh.
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

      {featuredArticles.length > 0 && (
        <div className="py-12 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-48 sm:h-64 md:h-full bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-cta text-cta-text text-[11px] font-bold rounded-full">
                        FEATURED
                      </div>
                    </div>
                    <div className="p-5 sm:p-7 lg:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-text-primary tracking-tight leading-snug group-hover:text-primary-500 transition-colors">
                        {article.title}
                      </h2>
                      <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">
                        {article.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 group-hover:gap-2.5 transition-all">
                        Baca artikel <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      <div className="py-12 sm:py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Semua Artikel</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    {article.featured && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-cta text-cta-text text-[11px] font-bold rounded-full">
                        FEATURED
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-text-primary tracking-tight leading-snug group-hover:text-primary-500 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-text-muted">{article.date}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 group-hover:gap-2.5 transition-all">
                        Baca <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
