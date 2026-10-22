import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  Check,
  Send,
  MessageSquare,
  Code,
  Compass,
  Sparkles,
} from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'
import type { Job } from '../types'
import { useSEO } from '../hooks/useSEO'

export const CareersPage: React.FC = () => {
  useSEO({
    title: 'Karir',
    description:
      'Peluang karir dan kultur kerja di Triforion Technology. Bergabung untuk membangun solusi web dan sistem digital yang andal.',
    canonicalPath: '/careers',
    type: 'website',
  })

  const handleApply = (positionTitle?: string) => {
    const subject = encodeURIComponent(
      `Lamaran Pekerjaan: ${positionTitle || 'Posisi Spontan'} - Triforion Technology`
    )
    const body = encodeURIComponent(
      `Halo Tim Rekrutmen Triforion Technology,\n\nSaya tertarik untuk mengajukan lamaran untuk posisi ${
        positionTitle || 'terkait keahlian saya'
      }.\n\nNama Lengkap:\nNomor Kontak / WhatsApp:\nTautan Portofolio / GitHub / LinkedIn:\n\nTerima kasih.`
    )
    window.location.assign(`mailto:triforiontechnology@gmail.com?subject=${subject}&body=${body}`)
  }

  const cultureItems = [
    {
      icon: Code,
      title: 'Standar Rekayasa Tinggi',
      desc: 'Menerapkan arsitektur teruji, clean code, dan code review menyeluruh agar setiap baris kode yang dirilis benar-benar andal.',
      tags: ['Clean Code', 'Code Review', 'Modern Stack'],
    },
    {
      icon: Compass,
      title: 'Otonomi & Komunikasi Terarah',
      desc: 'Menghargai fokus berpikir mendalam tanpa meeting yang tidak perlu, didukung komunikasi tertulis dan dokumentasi rapi.',
      tags: ['Asinkron', 'Dokumentasi Rapi', 'Minim Rapat'],
    },
    {
      icon: Sparkles,
      title: 'Eksplorasi & Dampak Nyata',
      desc: 'Mendorong eksplorasi alat dan teknologi baru untuk menyelesaikan kebutuhan serta tantangan bisnis riil klien.',
      tags: ['Problem Solving', 'Modern Tooling', 'Hasil Riil'],
    },
  ]

  const jobs: Job[] = [
    {
      title: 'UI/UX Designer',
      location: 'Jakarta Selatan',
      type: 'Full-time',
      status: 'closed',
      description:
        'Kami mencari UI/UX Designer yang berfokus menciptakan antarmuka web dan sistem bisnis yang intuitif, fungsional, dan bernilai bagi klien.',
      requirements: [
        'Pengalaman minimal 2 tahun di bidang UI/UX design',
        'Mahir menggunakan Figma, design tokens, dan interactive prototyping',
        'Memahami prinsip user-centered design, usability, dan batasan implementasi web',
        'Mampu membuat wireframe, prototype, dan high-fidelity mockup',
        'Portfolio yang menunjukkan kemampuan problem-solving',
      ],
    },
  ]

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
              KARIR
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-[2rem] font-extrabold text-text-primary tracking-tight leading-tight">
              Bergabung dengan <span className="gradient-text">Tim Kami</span>
            </h1>
            <p className="mt-2.5 text-sm sm:text-base text-text-secondary leading-relaxed">
              Kami mencari talenta yang berdedikasi untuk membantu bisnis berkembang melalui rekayasa website dan sistem digital yang andal.
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

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="KULTUR KERJA"
            title="Lingkungan yang mendukung"
            highlight="potensi Anda"
            description="Prinsip kerja yang kami terapkan sehari-hari untuk menjaga kualitas produk dan kenyamanan tim."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {cultureItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-white rounded-2xl border border-border p-5 sm:p-6 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-1.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3.5">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-surface text-xs font-medium text-text-muted rounded-full"
                      >
                        <Check className="w-3 h-3 text-success" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="POSISI TERBUKA"
            title="Temukan peran yang"
            highlight="sesuai untuk Anda"
            description="Lihat lowongan yang tersedia dan kualifikasi yang kami cari."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-6 sm:p-7 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 pb-4 border-b border-border">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight">
                        {job.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                          job.status === 'closed'
                            ? 'bg-slate-100 text-slate-600'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {job.status === 'closed' ? (
                          'Ditutup'
                        ) : (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Dibuka
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary-500" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary-500" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {job.status !== 'closed' && (
                    <button
                      type="button"
                      onClick={() => handleApply(job.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta text-cta-text text-sm font-semibold rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-[0_4px_16px_rgba(255,198,46,0.3)] hover:shadow-[0_8px_32px_rgba(255,198,46,0.4)] hover:-translate-y-0.5 cursor-pointer border-none"
                    >
                      Lamar Sekarang <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2.5">
                    Kualifikasi:
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {job.requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                        <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.status === 'closed' && (
                  <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-text-muted">
                    <p className="italic">
                      Lowongan ini telah ditutup. Terima kasih atas minat Anda.
                    </p>
                    <button
                      type="button"
                      onClick={() => handleApply(`Talent Pool (${job.title})`)}
                      className="inline-flex items-center gap-1 font-semibold text-primary-600 hover:text-primary-700 transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      Kirim Lamaran Spontan <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}

            {jobs.length === 0 && (
              <div className="bg-white rounded-2xl border border-border p-12 text-center max-w-md mx-auto">
                <p className="text-sm font-medium text-text-secondary">Saat ini belum ada lowongan yang tersedia.</p>
                <p className="text-xs text-text-muted mt-1">Anda tetap dapat mengirimkan CV melalui jalur lamaran spontan di bawah.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden text-center"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-white/5 rounded-full" />
              <div className="absolute -bottom-16 -left-16 w-40 sm:w-60 h-40 sm:h-60 bg-white/5 rounded-full" />
            </div>

            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
                Tidak menemukan posisi yang cocok?
              </h2>
              <p className="mt-2.5 sm:mt-4 text-primary-100 text-sm sm:text-base leading-relaxed">
                Kami selalu terbuka untuk talenta luar biasa. Kirimkan CV dan portfolio Anda, dan kami akan menghubungi jika ada posisi yang sesuai.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={() => handleApply('Lamaran Spontan')}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-cta text-cta-text text-sm sm:text-[15px] font-bold rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-[0_4px_20px_rgba(255,198,46,0.4)] hover:shadow-[0_8px_32px_rgba(255,198,46,0.5)] hover:-translate-y-0.5 cursor-pointer border-none"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Kirim Lamaran Spontan
                </button>
                <a
                  href="https://wa.me/6281231929833?text=Halo%20Triforion,%20saya%20tertarik%20mengajukan%20lamaran%20pekerjaan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-[15px] font-semibold rounded-xl hover:bg-white/20 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp Kami
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
