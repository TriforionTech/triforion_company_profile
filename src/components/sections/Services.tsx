import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Code, Search, Shield, Layers, Check } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { ServiceItem } from '../../types'

export const Services: React.FC = () => {
  const { ref, isInView } = useScrollReveal()

  const services: ServiceItem[] = [
    {
      icon: Globe,
      title: 'Website Company Profile',
      desc: 'Bangun kredibilitas bisnis dengan website profesional yang merepresentasikan brand Anda.',
      features: ['Desain custom', 'Responsive', 'SEO-ready'],
    },
    {
      icon: Smartphone,
      title: 'Landing Page',
      desc: 'Halaman konversi tinggi yang dirancang khusus untuk campaign marketing dan produk.',
      features: ['A/B testing', 'Fast loading', 'Analytics'],
    },
    {
      icon: Code,
      title: 'Web Application',
      desc: 'Aplikasi web custom untuk kebutuhan operasional bisnis yang kompleks dan terintegrasi.',
      features: ['Full-stack', 'API integration', 'Cloud deploy'],
    },
    {
      icon: Search,
      title: 'SEO & Optimasi',
      desc: 'Optimasi mesin pencari dan performa website agar mudah ditemukan pelanggan.',
      features: ['Technical SEO', 'Core Web Vitals', 'Schema markup'],
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      desc: 'Layanan pemeliharaan berkala untuk memastikan website tetap aman dan up-to-date.',
      features: ['Security patch', 'Backup', 'Monitoring'],
    },
    {
      icon: Layers,
      title: 'E-Commerce',
      desc: 'Toko online lengkap dengan sistem pembayaran, inventori, dan manajemen pesanan.',
      features: ['Payment gateway', 'Inventory', 'Dashboard'],
    },
  ]

  return (
    <section id="layanan" ref={ref} className="py-12 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="LAYANAN KAMI"
          title="Solusi digital"
          highlight="end-to-end"
          description="Dari konsep hingga deployment, kami menangani setiap aspek pengembangan website Anda dengan standar enterprise."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative bg-white rounded-2xl border border-border p-5 sm:p-6 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1.5 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3.5">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface text-xs font-medium text-text-muted rounded-full"
                    >
                      <Check className="w-3 h-3 text-success" />
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
