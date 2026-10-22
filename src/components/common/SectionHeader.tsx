import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface SectionHeaderProps {
  badge: string
  title: string
  highlight: string
  description?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlight,
  description,
}) => {
  const { ref, isInView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
    >
      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
        {badge}
      </span>
      <h2 className="text-xl sm:text-2xl lg:text-[2rem] font-extrabold text-text-primary tracking-tight leading-tight">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-2.5 text-sm sm:text-base text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
