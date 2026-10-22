import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, FileText } from 'lucide-react'

interface LegalModalProps {
  isOpen: boolean
  initialTab?: 'privacy' | 'terms'
  onClose: () => void
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const [userTab, setUserTab] = useState<'privacy' | 'terms' | null>(null)
  const activeTab = userTab ?? initialTab

  const handleClose = useCallback(() => {
    setUserTab(null)
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs"
        >
          <div
            className="absolute inset-0"
            onClick={handleClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl bg-white rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10"
          >
            <div className="p-5 sm:p-6 border-b border-border flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary-600 font-semibold">
                  Ketentuan Layanan
                </span>
                <h3
                  id="legal-modal-title"
                  className="text-lg font-bold text-text-primary mt-0.5 tracking-tight"
                >
                  Kebijakan Privasi &amp; Syarat Ketentuan
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Tutup dialog ketentuan hukum"
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-colors cursor-pointer border-none bg-transparent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex border-b border-border px-5 sm:px-6 gap-4 bg-surface/50">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'privacy'}
                onClick={() => setUserTab('privacy')}
                className={`flex items-center gap-2 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer bg-transparent border-t-0 border-x-0 ${
                  activeTab === 'privacy'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-text-muted hover:text-text-primary'
                }`}
              >
                <Shield className="w-4 h-4" />
                Kebijakan Privasi
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'terms'}
                onClick={() => setUserTab('terms')}
                className={`flex items-center gap-2 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer bg-transparent border-t-0 border-x-0 ${
                  activeTab === 'terms'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-text-muted hover:text-text-primary'
                }`}
              >
                <FileText className="w-4 h-4" />
                Syarat &amp; Ketentuan Layanan
              </button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed flex-1">
              {activeTab === 'privacy' ? (
                <div className="space-y-3">
                  <h4 className="font-bold text-text-primary text-sm">
                    1. Komitmen Pengumpulan Data yang Minimal
                  </h4>
                  <p>
                    Situs ini dibangun dengan prinsip <em>privacy by design</em>. Triforion Technology tidak mengumpulkan data pribadi pengunjung tanpa persetujuan eksplisit. Informasi yang dikirimkan melalui formulir kontak semata-mata digunakan untuk kepentingan korespondensi dan penawaran proyek.
                  </p>

                  <h4 className="font-bold text-text-primary text-sm pt-2">
                    2. Penyimpanan Sisi Klien (Local Storage)
                  </h4>
                  <p>
                    Preferensi tampilan atau sesi disimpan secara lokal di peramban Anda tanpa sinkronisasi ke pelacak pihak ketiga atau penjualan data kepada broker iklan.
                  </p>

                  <h4 className="font-bold text-text-primary text-sm pt-2">
                    3. Keamanan Informasi &amp; Hak Penghapusan
                  </h4>
                  <p>
                    Setiap klien atau mitra bisnis berhak meminta tinjauan atau penghapusan data kontak yang telah dikirimkan kapan saja melalui saluran komunikasi resmi kami di <span className="font-medium text-text-primary">triforiontechnology@gmail.com</span>.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <h4 className="font-bold text-text-primary text-sm">
                    1. Hak Kekayaan Intelektual &amp; Hasil Karya
                  </h4>
                  <p>
                    Seluruh aset kode sumber, desain, dan arsitektur website yang dikembangkan oleh Triforion Technology diserahkan secara sah kepada klien setelah penyelesaian kewajiban kontrak kerja sama.
                  </p>

                  <h4 className="font-bold text-text-primary text-sm pt-2">
                    2. Otentisitas dan Standar Kualitas (Anti-Slop)
                  </h4>
                  <p>
                    Kami berkomitmen menerapkan kode yang bersih, terdokumentasi, dan bebas dari ketergantungan komponen buatan yang tidak teruji (*no decorative slop*). Seluruh solusi dibangun dengan teknologi modern standar industri.
                  </p>

                  <h4 className="font-bold text-text-primary text-sm pt-2">
                    3. Garansi &amp; Dukungan Pemeliharaan
                  </h4>
                  <p>
                    Triforion Technology menyediakan periode garansi perbaikan bug dan optimasi performa pasca-peluncuran sesuai kesepakatan paket layanan yang dipilih.
                  </p>
                </div>
              )}
            </div>
            <div className="p-4 sm:p-5 border-t border-border bg-surface flex items-center justify-between gap-3">
              <span className="text-[11px] text-text-muted">
                Berlaku sejak 2025 • Versi 1.1
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-colors cursor-pointer border-none shadow-xs"
              >
                Saya Memahami Ketentuan Ini
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
