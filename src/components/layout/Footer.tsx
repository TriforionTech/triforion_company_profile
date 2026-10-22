import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { LegalModal } from '../common/LegalModal'

export const Footer: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [legalModalOpen, setLegalModalOpen] = useState(false)
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy')

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }
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

  const openLegal = (tab: 'privacy' | 'terms') => {
    setLegalTab(tab)
    setLegalModalOpen(true)
  }

  return (
    <>
      <footer className="bg-footer-bg text-footer-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center gap-2.5 mb-3 group cursor-pointer"
              >
                <img
                  src="https://i.ibb.co.com/FkN6ssgh/logo.webp"
                  alt="Triforion Technology"
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                />
                <span className="font-bold text-base sm:text-lg text-white tracking-tight">
                  Triforion
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-footer-text/80 max-w-xs">
                Membangun website profesional yang menggerakkan bisnis. Dari UMKM hingga enterprise.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Layanan</h3>
              <ul className="space-y-2">
                {['Company Profile', 'Landing Page', 'Web Application', 'E-Commerce', 'SEO'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection('layanan')}
                      className="text-sm text-footer-text/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Perusahaan</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('proses')}
                    className="text-sm text-footer-text/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                  >
                    Proses Kerja
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('portofolio')}
                    className="text-sm text-footer-text/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                  >
                    Portofolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('harga')}
                    className="text-sm text-footer-text/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                  >
                    Paket Harga
                  </button>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-footer-text/70 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-footer-text/70 hover:text-white transition-colors">
                    Karir
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('kontak')}
                    className="text-sm text-footer-text/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                  >
                    Kontak
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Kontak</h3>
              <ul className="space-y-2">
                <li className="text-sm text-footer-text/70">triforiontechnology@gmail.com</li>
                <li className="text-sm text-footer-text/70">0812-3192-9833</li>
                <li className="text-sm text-footer-text/70">Jakarta Selatan, DKI Jakarta</li>
              </ul>
              <div className="flex gap-2 mt-3">
                <a
                  href="https://www.linkedin.com/company/triforiontech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 text-footer-text/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/triforiontech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 text-footer-text/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://linktr.ee/triforiontech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linktree"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 text-footer-text/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.192 11.642c-.477 0-.864.387-.864.864v9.397c0 .477.387.864.864.864h.864c.477 0 .864-.387.864-.864v-9.397c0-.477-.387-.864-.864-.864h-.864zm3.456 0c-.477 0-.864.387-.864.864v9.397c0 .477.387.864.864.864h.864c.477 0 .864-.387.864-.864v-9.397c0-.477-.387-.864-.864-.864h-.864zm3.456 0c-.477 0-.864.387-.864.864v9.397c0 .477.387.864.864.864h.864c.477 0 .864-.387.864-.864v-9.397c0-.477-.387-.864-.864-.864h-.864zM12 1.236a.864.864 0 00-.864.864v7.67h1.728v-7.67a.864.864 0 00-.864-.864zM4.064 7.5l6.072 6.072a2.592 2.592 0 003.665 0l6.072-6.072-1.222-1.222-6.072 6.072a.864.864 0 01-1.222 0L5.286 6.278 4.064 7.5z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/TriforionTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 text-footer-text/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-footer-text/60">
              © 2025 Triforion Technology. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => openLegal('privacy')}
                className="text-xs text-footer-text/60 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => openLegal('terms')}
                className="text-xs text-footer-text/60 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </>
  )
}
