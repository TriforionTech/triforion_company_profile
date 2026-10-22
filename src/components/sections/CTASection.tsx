import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export const CTASection: React.FC = () => {
  const { ref, isInView } = useScrollReveal()

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
    <section ref={ref} className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-white/5 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-40 sm:w-60 h-40 sm:h-60 bg-white/5 rounded-full" />
          </div>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
              Siap membawa bisnis Anda ke level berikutnya?
            </h2>
            <p className="mt-2.5 sm:mt-4 text-primary-100 text-sm sm:text-base leading-relaxed">
              Konsultasi gratis 30 menit untuk mendiskusikan kebutuhan website Anda. Tanpa komitmen.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => scrollToSection('kontak')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-cta text-cta-text text-sm sm:text-[15px] font-bold rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-[0_4px_20px_rgba(255,198,46,0.4)] hover:shadow-[0_8px_32px_rgba(255,198,46,0.5)] hover:-translate-y-0.5 cursor-pointer border-none"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                Konsultasi Sekarang
              </button>
              <a
                href="https://wa.me/6281231929833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-[15px] font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
              >
                WhatsApp Kami
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
