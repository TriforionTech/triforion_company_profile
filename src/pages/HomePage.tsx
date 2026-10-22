import React from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { Hero } from '../components/sections/Hero'
import { ClientMarquee } from '../components/sections/ClientMarquee'
import { Services } from '../components/sections/Services'
import { Process } from '../components/sections/Process'
import { Portfolio } from '../components/sections/Portfolio'
import { CTASection } from '../components/sections/CTASection'
import { Contact } from '../components/sections/Contact'

export const HomePage: React.FC = () => {
  useDocumentTitle()
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
