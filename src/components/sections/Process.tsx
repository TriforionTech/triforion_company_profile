import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../common/SectionHeader'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { ProcessStep } from '../../types'

export const Process: React.FC = () => {
  const { ref, isInView } = useScrollReveal()

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'Kami memahami bisnis, target audiens, dan tujuan Anda melalui sesi konsultasi mendalam.',
    },
    {
      num: '02',
      title: 'Desain & Prototyping',
      desc: 'Wireframe dan mockup interaktif untuk memvisualisasikan website sebelum development.',
    },
    {
      num: '03',
      title: 'Development',
      desc: 'Coding dengan teknologi modern, performa optimal, dan best practices keamanan.',
    },
    {
      num: '04',
      title: 'Launch & Grow',
      desc: 'Deployment, monitoring, dan optimasi berkelanjutan untuk pertumbuhan bisnis.',
    },
  ]

  return (
    <section id="proses" ref={ref} className="py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PROSES KERJA"
          title="Empat langkah menuju"
          highlight="website impian"
          description="Proses terstruktur yang transparan, efisien, dan berorientasi hasil."
        />

        <div className="lg:hidden space-y-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 items-start bg-white rounded-xl border border-border p-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 border border-primary-200 flex items-center justify-center">
                <span className="text-sm font-extrabold gradient-text">{step.num}</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-text-primary tracking-tight">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mt-0.5">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary-100 via-primary-300 to-primary-100" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-5">
                <div className="absolute inset-0 rounded-full bg-primary-50 animate-border-glow" />
                <div className="relative w-16 h-16 rounded-full bg-white border-2 border-primary-200 flex items-center justify-center shadow-md">
                  <span className="text-xl font-extrabold gradient-text">{step.num}</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-text-primary mb-1.5 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
