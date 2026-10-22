import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const handleHomeClick = (e?: React.MouseEvent) => {
    if (location.pathname === '/') {
      e?.preventDefault()
      if (mobileOpen) {
        setMobileOpen(false)
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 200)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      setMobileOpen(false)
    }
  }

  const links = [
    { label: 'Beranda', href: '/', isHash: false },
    { label: 'Layanan', href: 'layanan', isHash: true },
    { label: 'Proses', href: 'proses', isHash: true },
    { label: 'Portofolio', href: 'portofolio', isHash: true },
    { label: 'Harga', href: 'harga', isHash: true },
    { label: 'Blog', href: '/blog', isHash: false },
    { label: 'Karir', href: '/careers', isHash: false },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
        <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2 group">
          <img
            src="https://i.ibb.co.com/FkN6ssgh/logo.webp"
            alt="Triforion Technology"
            width={36}
            height={36}
            decoding="async"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
          />
          <span className="font-bold text-base sm:text-lg text-text-primary tracking-tight">
            Triforion
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => {
            if (link.isHash) {
              return (
                <button
                  key={link.href + link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-text-secondary hover:text-primary-500 transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer bg-transparent border-none p-0"
                >
                  {link.label}
                </button>
              )
            }
            return (
              <Link
                key={link.href + link.label}
                to={link.href}
                onClick={link.href === '/' ? handleHomeClick : undefined}
                className="text-sm font-medium text-text-secondary hover:text-primary-500 transition-colors duration-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => scrollToSection('kontak')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta text-cta-text text-sm font-semibold rounded-lg hover:bg-cta-hover transition-all duration-200 shadow-[0_2px_8px_rgba(255,198,46,0.3)] hover:shadow-[0_4px_16px_rgba(255,198,46,0.4)] hover:-translate-y-0.5 cursor-pointer border-none"
          >
            Konsultasi Gratis
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 text-text-primary bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 py-3 space-y-0.5">
              {links.map((link) => {
                if (link.isHash) {
                  return (
                    <button
                      key={link.href + link.label}
                      onClick={() => {
                        setMobileOpen(false)
                        setTimeout(() => {
                          scrollToSection(link.href)
                        }, 200)
                      }}
                      className="w-full text-left block py-2.5 px-3 text-sm font-medium text-text-secondary hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors cursor-pointer bg-transparent border-none"
                    >
                      {link.label}
                    </button>
                  )
                }
                return (
                  <Link
                    key={link.href + link.label}
                    to={link.href}
                    onClick={(e) => {
                      if (link.href === '/') {
                        handleHomeClick(e)
                      } else {
                        setMobileOpen(false)
                      }
                    }}
                    className="block py-2.5 px-3 text-sm font-medium text-text-secondary hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    setTimeout(() => {
                      scrollToSection('kontak')
                    }, 200)
                  }}
                  className="block w-full text-center px-5 py-2.5 bg-cta text-cta-text text-sm font-semibold rounded-lg cursor-pointer border-none"
                >
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
