import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, TrendingUp, Zap } from 'lucide-react'

export const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navOffset = window.innerWidth < 640 ? 56 : 72
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden grid-pattern">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-56 h-56 sm:w-72 sm:h-72 bg-primary-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-[5%] w-64 h-64 sm:w-96 sm:h-96 bg-primary-50 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4"
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary-700">Menerima project baru</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[1.875rem] sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.12] tracking-tight text-text-primary"
            >
              Website yang{' '}
              <span className="gradient-text">menggerakkan</span>{' '}
              bisnis Anda
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed max-w-lg"
            >
              Triforion Technology membangun website profesional dan sistem bisnis untuk UMKM hingga korporasi. Desain modern, performa tinggi, dan dirancang untuk mendukung pertumbuhan serta efisiensi operasional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="mt-5 sm:mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollToSection('kontak')}
                className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-cta text-cta-text text-sm sm:text-[15px] font-semibold rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-[0_4px_16px_rgba(255,198,46,0.3)] hover:shadow-[0_8px_32px_rgba(255,198,46,0.4)] hover:-translate-y-0.5 cursor-pointer border-none"
              >
                Mulai Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('portofolio')}
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-white border border-border text-text-primary text-sm sm:text-[15px] font-semibold rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 cursor-pointer"
              >
                Lihat Portofolio
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="relative bg-white rounded-2xl border border-border shadow-2xl shadow-primary-900/5 p-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <img
                    src="https://i.ibb.co.com/FkN6ssgh/logo.webp"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="w-52 h-52 sm:w-60 sm:h-60 object-contain opacity-[0.14] select-none pointer-events-none"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-danger" />
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <div className="ml-3 flex-1 h-6 bg-surface/80 rounded-md" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-primary-50/85 rounded-lg w-3/4 shimmer" />
                    <div className="h-4 bg-surface/85 rounded w-full" />
                    <div className="h-4 bg-surface/85 rounded w-5/6" />
                    <div className="h-4 bg-surface/85 rounded w-2/3" />
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <div className="h-20 bg-primary-50/85 rounded-lg border border-primary-100/80 backdrop-blur-[1px]" />
                      <div className="h-20 bg-primary-50/85 rounded-lg border border-primary-100/80 backdrop-blur-[1px]" />
                      <div className="h-20 bg-primary-50/85 rounded-lg border border-primary-100/80 backdrop-blur-[1px]" />
                    </div>
                    <div className="h-10 bg-cta/25 rounded-lg w-1/3 mt-4" />
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white rounded-xl border border-border shadow-lg p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted">Optimasi</p>
                  <p className="text-sm font-bold text-success">+247%</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-white rounded-xl border border-border shadow-lg p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted">PageSpeed</p>
                  <p className="text-sm font-bold text-primary-500">90+</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
