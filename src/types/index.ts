import React from 'react'

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
  authorRole: string
  content: string
  featured?: boolean
}

export interface Job {
  title: string
  location: string
  type: string
  status: 'open' | 'closed'
  description: string
  requirements: string[]
}

export interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  features: string[]
}

export interface ProcessStep {
  num: string
  title: string
  desc: string
}

export interface ProjectItem {
  title: string
  category: string
  desc: string
  color: string
  metrics: string
  image?: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}
