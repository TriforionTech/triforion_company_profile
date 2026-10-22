import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Loader2, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { ProjectItem } from '../../types'

interface PortfolioImageProps {
  image?: string
  title: string
  category: string
  color: string
  url?: string
}

const PortfolioImage: React.FC<PortfolioImageProps> = ({ image, title, category, color, url }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(!image)

  const content = (
    <div className={`h-36 sm:h-48 bg-gradient-to-br ${color} relative overflow-hidden select-none`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/30 backdrop-blur-[2px]">
          <div className="p-2.5 rounded-full bg-white/10 border border-white/20 shadow-md backdrop-blur-md">
            <Loader2 className="w-5 h-5 text-white animate-spin" />
          </div>
        </div>
      )}

      {image && !hasError ? (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt={`${title} - ${category}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-auto min-h-[200%] object-cover animate-pan transition-opacity duration-500 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-3 left-3 right-3 h-6 sm:h-7 bg-white/20 rounded" />
          <div className="absolute top-12 left-3 w-1/3 h-14 sm:h-20 bg-white/15 rounded-lg" />
          <div className="absolute top-12 right-3 w-1/2 h-14 sm:h-20 bg-white/10 rounded-lg" />
          <div className="absolute bottom-3 left-3 right-3 h-4 sm:h-5 bg-white/15 rounded" />
        </div>
      )}

      <div className="absolute top-2.5 right-2.5 z-20 px-2.5 py-1 bg-slate-900/85 backdrop-blur-md rounded-full text-[11px] sm:text-xs font-semibold text-white shadow-md border border-white/15">
        {category}
      </div>
    </div>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group/thumbnail overflow-hidden"
        aria-label={`Kunjungi website ${title}`}
      >
        {content}
      </a>
    )
  }

  return content
}

export const Portfolio: React.FC = () => {
  const { ref, isInView } = useScrollReveal()
  const [visibleCount, setVisibleCount] = useState(4)

  const projects: ProjectItem[] = [
    {
      title: 'Bloomorist',
      category: 'Web Application',
      desc: 'Aplikasi web terintegrasi untuk bisnis florist dengan fitur kelola stok, pencatatan keuangan, dan pembuatan invoice digital secara otomatis.',
      color: 'from-rose-500 to-pink-600',
      metrics: 'Operasional lebih rapi',
      image: 'https://i.ibb.co.com/mLZBYSV/bloomorist-fullpage-compressed.webp',
      url: 'https://bloomorist.com/',
    },
    {
      title: 'Anmedia Group',
      category: 'Company Profile',
      desc: 'Website company profile multimedia lengkap dengan portofolio, galeri, blog, daftar harga, testimoni, dan panel pengelolaan konten.',
      color: 'from-primary-500 to-primary-700',
      metrics: 'Konten mudah diperbarui',
      image: 'https://i.ibb.co.com/QvkcZW6S/anmedia-fullpage-compressed.webp',
      url: 'https://anmediagroub.com/',
    },
    {
      title: 'PKK Awang Bangkal Barat',
      category: 'Organisasi',
      desc: 'Website profil resmi Tim Penggerak PKK Desa dengan struktur kepengurusan interaktif, program kerja, publikasi berita, dan etalase produk UMKM.',
      color: 'from-emerald-500 to-teal-600',
      metrics: 'Informasi terpusat',
      image: 'https://i.ibb.co.com/39Hw8qFR/pkk-awangbangka-fullpage-compressed.webp',
      url: 'https://pkk-awangbangkalbarat.org/',
    },
    {
      title: 'Twentynine Cleaning Shoes',
      category: 'Jasa',
      desc: 'Website komersial penyedia jasa perawatan sepatu modern dengan tampilan rapi, responsif, cepat diakses, dan informasi layanan yang jelas.',
      color: 'from-amber-500 to-orange-600',
      metrics: 'Akses cepat & responsif',
      image: 'https://i.ibb.co.com/0jGp2JmP/twentynine-fullpage-compressed.webp',
      url: 'https://twentyninecleaningshoes.pages.dev/',
    },
    {
      title: 'Hot Plate PAK MINTO',
      category: 'F&B',
      desc: 'Menu digital dan pemesanan via WhatsApp yang mudah. Pengunjung melihat pilihan menu dan langsung memesan tanpa langkah rumit.',
      color: 'from-red-500 to-rose-600',
      metrics: 'Pemesanan instan',
      url: 'https://hot-plate-pak-minto.pages.dev/',
    },
    {
      title: 'BARBERBOY',
      category: 'Barbershop',
      desc: 'Website barbershop yang menampilkan layanan, gaya potong rambut, dan kemudahan booking melalui WhatsApp dengan tampilan sederhana.',
      color: 'from-slate-700 to-gray-900',
      metrics: 'Booking via WhatsApp',
      url: 'https://barberboy.pages.dev/',
    },
  ]

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  return (
    <section id="portofolio" ref={ref} className="py-12 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PORTOFOLIO"
          title="Karya yang"
          highlight="berbicara"
          description="Beberapa project terbaik kami yang telah membantu bisnis tumbuh secara digital."
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                layout
                className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <PortfolioImage
                    image={project.image}
                    title={project.title}
                    category={project.category}
                    color={project.color}
                    url={project.url}
                  />

                  <div className="p-5 sm:p-6 pb-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-[15px] sm:text-base font-bold text-text-primary tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-success/10 text-success text-[11px] sm:text-xs font-semibold rounded-full whitespace-nowrap flex-shrink-0">
                        {project.metrics}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {project.url && (
                  <div className="p-5 sm:p-6 pt-4">
                    <div className="pt-3 border-t border-border">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-primary-700 transition-colors group/link"
                      >
                        Kunjungi Website
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount(projects.length)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border text-text-primary text-sm font-semibold rounded-xl hover:border-primary-300 hover:bg-primary-50 hover:text-primary-500 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              Lihat Semua Project
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
