import React from 'react'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiAstro,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiFilament,
  SiMysql,
  SiPostgresql,
  SiCloudflare,
  SiHostinger,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si'

interface TechItem {
  name: string
  slug: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

export const ClientMarquee: React.FC = () => {
  const clients = [
    'Bloomorist',
    'Anmedia Group',
    'PKK Awang Bangkal Barat',
    'Twentynine Cleaning Shoes',
    'Hot Plate PAK MINTO',
    'BARBERBOY',
  ]

  const technologies: TechItem[] = [
    { name: 'HTML5', slug: 'html5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', slug: 'css', icon: SiCss, color: '#1572B6' },
    { name: 'JavaScript', slug: 'javascript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React JS', slug: 'react', icon: SiReact, color: '#61DAFB' },
    { name: 'Astro', slug: 'astro', icon: SiAstro, color: '#BC52EE' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'PHP', slug: 'php', icon: SiPhp, color: '#777BB4' },
    { name: 'Laravel', slug: 'laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'Filament', slug: 'filament', icon: SiFilament, color: '#F59E0B' },
    { name: 'MySQL', slug: 'mysql', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', slug: 'postgresql', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Cloudflare', slug: 'cloudflare', icon: SiCloudflare, color: '#F38020' },
    { name: 'Hostinger', slug: 'hostinger', icon: SiHostinger, color: '#673DE6' },
    { name: 'Git', slug: 'git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', slug: 'github', icon: SiGithub, color: '#181717' },
    { name: 'Figma', slug: 'figma', icon: SiFigma, color: '#F24E1E' },
  ]

  const clientItems = [...clients, ...clients, ...clients, ...clients]
  const techItems = [...technologies, ...technologies, ...technologies, ...technologies]

  return (
    <section className="py-8 sm:py-10 bg-surface border-y border-border overflow-hidden space-y-6 sm:space-y-8">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4">
          <p className="text-center text-xs sm:text-sm font-medium text-text-muted uppercase tracking-wider">
            Dipercaya oleh
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee whitespace-nowrap">
            {clientItems.map((client, i) => (
              <div key={i} className="inline-flex items-center gap-3 mx-6 sm:mx-8">
                <span className="text-base sm:text-lg font-semibold text-text-secondary hover:text-primary-500 transition-colors duration-200">
                  {client}
                </span>
                <span className="w-1 h-1 rounded-full bg-primary-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border/60" />
      </div>

      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4">
          <p className="text-center text-xs sm:text-sm font-medium text-text-muted uppercase tracking-wider">
            Ekosistem &amp; Teknologi Teruji
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
            {techItems.map((tech, i) => {
              const Icon = tech.icon
              return (
                <div
                  key={i}
                  className="inline-flex items-center justify-center mx-5 sm:mx-7 shrink-0 group py-1"
                  title={tech.name}
                  aria-label={tech.name}
                >
                  <Icon
                    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-125"
                    style={{ color: tech.color }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
