import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Users, TrendingUp, MapPin, Clock, Check, ArrowRight, ArrowLeft, Send } from 'lucide-react'
import type { Job } from '../types'
import { useSEO } from '../hooks/useSEO'

export const CareersPage: React.FC = () => {
  useSEO({
    title: 'Karir',
    description:
      'Bergabung dengan tim Triforion Technology. Peluang karir dan lingkungan kerja inovatif, kolaboratif, serta berdampak nyata di industri teknologi.',
    canonicalPath: '/careers',
    type: 'website',
  })
  const navigate = useNavigate()

  const handleSpontaneousApply = () => {
    navigate('/', { state: { scrollTo: 'kontak' } })
  }

  const jobs: Job[] = [
    {
      title: 'UI/UX Designer',
      location: 'Jakarta Selatan',
      type: 'Full-time',
      status: 'closed',
      description: 'Kami mencari UI/UX Designer yang passionate untuk menciptakan pengalaman digital yang bermakna bagi klien kami.',
      requirements: [
        'Pengalaman minimal 2 tahun di bidang UI/UX design',
        'Mahir menggunakan Figma, Adobe XD, atau tools design lainnya',
        'Memahami prinsip user-centered design dan usability',
        'Mampu membuat wireframe, prototype, dan high-fidelity mockup',
        'Portfolio yang menunjukkan kemampuan problem-solving',
      ],
    },
  ]

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
              KARIR
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-[2rem] font-extrabold text-text-primary tracking-tight leading-tight">
              Bergabung dengan <span className="gradient-text">tim kami</span>
            </h1>
            <p className="mt-2.5 text-sm sm:text-base text-text-secondary leading-relaxed">
              Kami mencari individu yang passionate untuk membantu bisnis tumbuh melalui solusi digital yang bermakna.
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

      <div className="py-12 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">Inovasi Tanpa Henti</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Kami terus mengeksplorasi teknologi terbaru dan pendekatan kreatif untuk memberikan solusi terbaik bagi klien.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">Kolaborasi Tim</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Lingkungan kerja yang mendukung pertumbuhan individu melalui kolaborasi dan pembelajaran bersama.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">Dampak Nyata</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Setiap proyek yang kami kerjakan memberikan dampak nyata bagi pertumbuhan bisnis klien kami.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-12 sm:py-20 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Lowongan Tersedia</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Temukan posisi yang sesuai dengan keahlian dan passion Anda.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-text-primary">{job.title}</h3>
                      <span
                        className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                          job.status === 'closed'
                            ? 'bg-danger/10 text-danger'
                            : 'bg-success/10 text-success'
                        }`}
                      >
                        {job.status === 'closed' ? 'Ditutup' : 'Dibuka'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Kualifikasi:</h4>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.status === 'closed' ? (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-text-muted italic">
                      Lowongan ini telah ditutup. Terima kasih atas minat Anda.
                    </p>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-border">
                    <button
                      type="button"
                      onClick={handleSpontaneousApply}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta text-cta-text text-sm font-semibold rounded-lg hover:bg-cta-hover transition-all duration-200 shadow-[0_2px_8px_rgba(255,198,46,0.3)] hover:shadow-[0_4px_16px_rgba(255,198,46,0.4)] hover:-translate-y-0.5 cursor-pointer border-none"
                    >
                      Lamar Sekarang
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {jobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">Saat ini belum ada lowongan yang tersedia.</p>
            </div>
          )}
        </div>
      </div>

      <div className="py-12 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
              Tidak menemukan posisi yang cocok?
            </h2>
            <p className="mt-3 text-primary-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Kami selalu terbuka untuk talenta luar biasa. Kirimkan CV dan portfolio Anda, dan kami akan menghubungi jika ada posisi yang sesuai.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleSpontaneousApply}
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-cta-text text-sm font-bold rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-[0_4px_20px_rgba(255,198,46,0.4)] hover:shadow-[0_8px_32px_rgba(255,198,46,0.5)] hover:-translate-y-0.5 cursor-pointer border-none"
              >
                <Send className="w-4 h-4" />
                Kirim Lamaran Spontan
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
