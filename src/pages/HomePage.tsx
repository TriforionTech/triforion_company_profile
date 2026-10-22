import React from 'react'
import { useSEO } from '../hooks/useSEO'
import { Hero } from '../components/sections/Hero'
import { ClientMarquee } from '../components/sections/ClientMarquee'
import { Services } from '../components/sections/Services'
import { Process } from '../components/sections/Process'
import { Portfolio } from '../components/sections/Portfolio'
import { CTASection } from '../components/sections/CTASection'
import { Contact } from '../components/sections/Contact'

export const HomePage: React.FC = () => {
  useSEO({
    canonicalPath: '/',
    type: 'website',
  })
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Services />
      <Process />
      <Portfolio />
      <CTASection />
      <Contact />
    </>
  )
}
