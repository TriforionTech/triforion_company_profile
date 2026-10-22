import { useEffect } from 'react'

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    const defaultTitle = 'Triforion Technology'
    document.title = title ? `${title} · Triforion` : defaultTitle
  }, [title])
}
