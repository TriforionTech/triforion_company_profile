import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export const NotFoundPage: React.FC = () => {
  useDocumentTitle('404 Tidak Ditemukan')
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <span className="text-6xl font-extrabold gradient-text mb-4">404</span>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight mb-2">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-sm sm:text-base text-text-secondary max-w-md mb-8">
        Halaman yang Anda tuju tidak tersedia atau telah dipindahkan.
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 px-6 py-3 bg-cta text-cta-text text-sm font-semibold rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-[0_4px_16px_rgba(255,198,46,0.3)] hover:shadow-[0_8px_32px_rgba(255,198,46,0.4)] hover:-translate-y-0.5"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Kembali ke Beranda
      </Link>
    </div>
  )
}
