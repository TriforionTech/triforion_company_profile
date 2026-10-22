import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Loader2, X, ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { ProjectItem } from '../../types'

interface PortfolioImageProps {
  image?: string
  title: string
  category: string
  color: string
}

const PortfolioImage: React.FC<PortfolioImageProps> = ({ image, title, category, color }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(!image)

  return (
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

      <div className="absolute top-2.5 right-2.5 z-20 px-2.5 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[11px] sm:text-xs font-medium text-white shadow-sm">
        {category}
      </div>
    </div>
  )
}

export const Portfolio: React.FC = () => {
  const { ref, isInView } = useScrollReveal()
  const [visibleCount, setVisibleCount] = useState(4)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [modalImgError, setModalImgError] = useState(false)

  const openProjectDetail = (project: ProjectItem) => {
    setModalImgError(false)
    setSelectedProject(project)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const scrollToContact = () => {
    setSelectedProject(null)
    setTimeout(() => {
      const element = document.getElementById('kontak')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const projects: ProjectItem[] = [
    {
      title: 'Bloomorist',
      category: 'Web Application',
      desc: 'Aplikasi web terintegrasi untuk bisnis florist dengan fitur kelola stok, pencatatan keuangan, dan pembuatan invoice digital secara otomatis.',
      color: 'from-rose-500 to-pink-600',
      metrics: 'Operasional lebih rapi',
      image: 'https://i.ibb.co.com/mLZBYSV/bloomorist-fullpage-compressed.webp',
    },
    {
      title: 'Anmedia Group',
      category: 'Company Profile',
      desc: 'Website company profile multimedia lengkap dengan portofolio, galeri, blog, daftar harga, testimoni, dan panel pengelolaan konten.',
      color: 'from-primary-500 to-primary-700',
      metrics: 'Konten mudah diperbarui',
      image: 'https://i.ibb.co.com/QvkcZW6S/anmedia-fullpage-compressed.webp',
    },
    {
      title: 'PKK Awang Bangkal Barat',
      category: 'Organisasi',
      desc: 'Website profil resmi Tim Penggerak PKK Desa dengan struktur kepengurusan interaktif, program kerja, publikasi berita, dan etalase produk UMKM.',
      color: 'from-emerald-500 to-teal-600',
      metrics: 'Informasi terpusat',
      image: 'https://i.ibb.co.com/39Hw8qFR/pkk-awangbangka-fullpage-compressed.webp',
    },
    {
      title: 'Twentynine Cleaning Shoes',
      category: 'Jasa',
      desc: 'Website komersial penyedia jasa perawatan sepatu modern dengan tampilan rapi, responsif, cepat diakses, dan informasi layanan yang jelas.',
      color: 'from-amber-500 to-orange-600',
      metrics: 'Akses cepat & responsif',
      image: 'https://i.ibb.co.com/0jGp2JmP/twentynine-fullpage-compressed.webp',
    },
    {
      title: 'Hot Plate PAK MINTO',
      category: 'F&B',
      desc: 'Menu digital dan pemesanan via WhatsApp yang mudah. Pengunjung melihat pilihan menu dan langsung memesan tanpa langkah rumit.',
      color: 'from-red-500 to-rose-600',
      metrics: 'Pemesanan instan',
    },
    {
      title: 'BARBERBOY',
      category: 'Barbershop',
      desc: 'Website barbershop yang menampilkan layanan, gaya potong rambut, dan kemudahan booking melalui WhatsApp dengan tampilan sederhana.',
      color: 'from-slate-700 to-gray-900',
      metrics: 'Booking via WhatsApp',
    },
  ]

  const visibleProjects = projects.slice(0, visibleCount)
  const hasMore = visibleCount < projects.length

  return (
    <>
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
                  className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <PortfolioImage
                    image={project.image}
                    title={project.title}
                    category={project.category}
                    color={project.color}
                  />

                  <div className="p-5 sm:p-6">
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
                    <button
                      onClick={() => openProjectDetail(project)}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-primary-700 transition-colors group/link cursor-pointer bg-transparent border-none p-0"
                    >
                      Lihat detail
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
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

      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs"
          >
            <div
              className="absolute inset-0"
              onClick={() => setSelectedProject(null)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xl bg-white rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              <div className="p-5 sm:p-6 border-b border-border flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="px-2 py-0.5 bg-success/10 text-success text-xs font-semibold rounded-full">
                      {selectedProject.metrics}
                    </span>
                  </div>
                  <h3
                    id="portfolio-modal-title"
                    className="text-lg sm:text-xl font-bold text-text-primary tracking-tight"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-colors cursor-pointer border-none bg-transparent"
                  aria-label="Tutup modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-sm text-text-secondary leading-relaxed flex-1">
                {selectedProject.image && !modalImgError && (
                  <div className="rounded-xl overflow-hidden border border-border max-h-64 relative bg-surface">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      decoding="async"
                      onError={() => setModalImgError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-primary-500" />
                    Ringkasan Solusi
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProject.desc}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border space-y-2">
                  <p className="text-xs font-semibold text-text-primary">Karakteristik Implementasi:</p>
                  <ul className="text-xs text-text-secondary space-y-1 list-disc list-inside">
                    <li>Desain responsif mobile-first teruji di berbagai perangkat</li>
                    <li>Kecepatan akses optimal dengan performa Core Web Vitals tinggi</li>
                    <li>Integrasi alur konversi langsung menuju saluran bisnis</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 sm:p-5 border-t border-border bg-surface flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-xl text-text-secondary hover:text-text-primary hover:bg-white transition-colors cursor-pointer border border-border"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-cta text-cta-text hover:bg-cta-hover transition-colors shadow-xs cursor-pointer border-none"
                >
                  Konsultasikan Project Serupa
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
