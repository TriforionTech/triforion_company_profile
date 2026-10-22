import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { PricingPlan } from '../../types'

export const Pricing: React.FC = () => {
  const { ref, isInView } = useScrollReveal()

  const plans: PricingPlan[] = [
    {
      name: 'Starter Landing Page',
      badge: 'Hemat & Cepat',
      price: 'Rp 299.000',
      period: '/ project',
      desc: 'Solusi efisien untuk campaign promosi, peluncuran produk baru, atau profil ringkas bisnis UMKM.',
      features: [
        '1 Halaman (Single Landing Page)',
        'Free Cloud Hosting & Subdomain',
        'Desain Responsif (Mobile & Desktop)',
        'Tombol WhatsApp Direct',
        'Optimasi Kecepatan & Core Web Vitals',
        'Revisi Minor 1x',
        'Pengerjaan Cepat (1-3 Hari)',
      ],
      ctaText: 'Pilih Paket Starter',
      ctaLink:
        'https://wa.me/6281231929833?text=Halo%20Triforion%2C%20saya%20tertarik%20dengan%20Paket%20Starter%20Landing%20Page%20(Rp%20299k).%20Bisa%20konsultasi%20detailnya%3F',
    },
    {
      name: 'Company Profile',
      badge: 'Paling Populer',
      price: 'Rp 999.000',
      period: '/ project',
      desc: 'Website resmi multi-halaman untuk memperkuat kredibilitas, branding, dan daya tarik bisnis profesional.',
      highlighted: true,
      features: [
        'Hingga 5 Halaman Konten Terstruktur',
        'Free Domain & Cloud Hosting 1 Tahun',
        'Desain Eksklusif & Interaktif',
        'SEO On-Page & Schema Markup Ready',
        'Contact Form & Integrasi Google Maps',
        'Garansi Pemeliharaan 3 Bulan',
        'Pengerjaan 5-7 Hari',
      ],
      ctaText: 'Pilih Paket Populer',
      ctaLink:
        'https://wa.me/6281231929833?text=Halo%20Triforion%2C%20saya%20tertarik%20dengan%20Paket%20Company%20Profile%20(Rp%20999k).%20Bisa%20konsultasi%20detailnya%3F',
    },
    {
      name: 'Web App & E-Commerce',
      badge: 'Bisnis Berkembang',
      price: 'Rp 2.499.000',
      period: '/ project',
      desc: 'Platform dinamis dengan manajemen katalog/produk, alur pemesanan, dan panel dashboard admin.',
      features: [
        'Sistem Dinamis & Dashboard Admin (CMS)',
        'Katalog Produk & Alur Pemesanan',
        'Database Terstruktur & Autentikasi User',
        'Integrasi WhatsApp Order / Checkout',
        'Backup Otomatis & Keamanan Data',
        'Garansi Pemeliharaan 6 Bulan',
        'Pengerjaan 14-21 Hari',
      ],
      ctaText: 'Pilih Paket Web App',
      ctaLink:
        'https://wa.me/6281231929833?text=Halo%20Triforion%2C%20saya%20tertarik%20dengan%20Paket%20Web%20App%20%26%20E-Commerce.%20Bisa%20konsultasi%20detailnya%3F',
    },
    {
      name: 'Custom Enterprise',
      badge: 'Solusi Khusus',
      price: 'Custom',
      period: '/ sesuai spesifikasi',
      desc: 'Pengembangan arsitektur kustom skala penuh untuk kebutuhan sistem internal kantor atau multi-API.',
      features: [
        'Arsitektur Custom End-to-End',
        'Integrasi Multi-API & Layanan Cloud',
        'High Performance & High Concurrency',
        'Modul Bisnis Kustom sesuai SOP',
        'Dedicated Project Manager & Tim',
        'SLA Support Prioritas 1 Tahun',
        'Training & Dokumentasi Teknis Lengkap',
      ],
      ctaText: 'Konsultasi Enterprise',
      ctaLink:
        'https://wa.me/6281231929833?text=Halo%20Triforion%2C%20saya%20ingin%20konsultasi%20Paket%20Custom%20Enterprise%20untuk%20kebutuhan%20sistem%20kami.',
    },
  ]

  return (
    <section id="harga" ref={ref} className="py-12 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PAKET & HARGA"
          title="Investasi transparan untuk"
          highlight="hasil maksimal"
          description="Pilih paket pengembangan website yang dirancang sesuai kebutuhan skala bisnis Anda. Tanpa biaya tersembunyi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? 'bg-white border-2 border-primary-500 shadow-xl shadow-primary-500/10 hover:-translate-y-1'
                  : 'bg-white border border-border shadow-xs hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-1'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary-500 text-white text-[11px] font-bold rounded-full shadow-sm tracking-wide uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              <div className="p-5 sm:p-6 pb-4">
                {!plan.highlighted && plan.badge && (
                  <span className="inline-block px-2.5 py-0.5 bg-surface text-text-muted text-[11px] font-semibold rounded-full mb-3">
                    {plan.badge}
                  </span>
                )}
                {plan.highlighted && <div className="h-4" />}

                <h3 className="text-base font-bold text-text-primary tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-xs text-text-secondary mt-1 min-h-[36px] leading-relaxed">
                  {plan.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xs text-text-muted font-medium">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 space-y-2.5">
                  <p className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                    Fitur yang didapatkan:
                  </p>
                  <ul className="space-y-2 text-xs text-text-secondary">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                    plan.highlighted
                      ? 'bg-cta text-cta-text hover:bg-cta-hover shadow-sm'
                      : 'bg-surface hover:bg-primary-50 text-text-primary hover:text-primary-600 border border-border hover:border-primary-300'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
