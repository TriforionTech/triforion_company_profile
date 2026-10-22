import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { ContactInfo } from '../../types'

export const Contact: React.FC = () => {
  const { ref, isInView } = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Company Profile',
    message: '',
  })

  const contactList: ContactInfo[] = [
    { icon: Mail, label: 'Email', value: 'triforiontechnology@gmail.com' },
    { icon: Phone, label: 'Telepon', value: '0812-3192-9833' },
    { icon: MapPin, label: 'Lokasi', value: 'Jakarta Selatan, DKI Jakarta' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cleanName = formData.name.trim()
    const cleanEmail = formData.email.trim()
    const cleanMessage = formData.message.trim()
    const text = encodeURIComponent(
      `Halo Triforion Technology,\n\nNama: ${cleanName}\nEmail: ${cleanEmail}\nLayanan: ${formData.service}\n\nPesan: ${cleanMessage}`
    )
    window.open(`https://wa.me/6281231929833?text=${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="kontak" ref={ref} className="py-12 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
              HUBUNGI KAMI
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[2rem] font-extrabold text-text-primary tracking-tight leading-tight">
              Mari diskusikan <span className="gradient-text">project Anda</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-text-secondary leading-relaxed">
              Ceritakan kebutuhan website Anda dan kami akan memberikan solusi terbaik. Respons cepat dalam 1×24 jam.
            </p>
            <div className="mt-6 space-y-3.5">
              {contactList.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-primary-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-text-muted">{item.label}</p>
                      <p className="text-sm font-medium text-text-primary truncate">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-border p-5 sm:p-8 lg:p-10 shadow-lg shadow-primary-900/5 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">Nama</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama lengkap"
                    className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5">Jenis Layanan</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all"
                >
                  <option>Website Company Profile</option>
                  <option>Landing Page</option>
                  <option>Web Application</option>
                  <option>E-Commerce</option>
                  <option>SEO &amp; Optimasi</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5">Pesan</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan tentang project Anda..."
                  className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-300 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-cta text-cta-text text-sm sm:text-[15px] font-semibold rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-[0_4px_16px_rgba(255,198,46,0.3)] hover:shadow-[0_8px_24px_rgba(255,198,46,0.4)] hover:-translate-y-0.5 cursor-pointer border-none"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-800" />
                      <span>Terkirim ke WhatsApp!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
