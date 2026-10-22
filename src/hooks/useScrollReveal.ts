import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}
