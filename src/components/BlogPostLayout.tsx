'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import CustomCursor from './CustomCursor'
import Header from './Header'
import Footer from './Footer'

interface BlogPostLayoutProps {
  title: string
  date: string
  category: string
  readTime: string
  intro: string
  children: ReactNode
}

export default function BlogPostLayout({
  title,
  date,
  category,
  readTime,
  intro,
  children
}: BlogPostLayoutProps) {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="blog-post-page">
        <article className="blog-post-article">
          {/* Header */}
          <div className="blog-post-header">
            <Link href="/blog" className="blog-post-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Blog
            </Link>

            <div className="blog-post-meta">
              <span className="blog-post-category">{category}</span>
              <span className="blog-post-meta-divider" />
              <time className="blog-post-date">{date}</time>
              <span className="blog-post-meta-divider" />
              <span className="blog-post-readtime">{readTime}</span>
            </div>

            <h1 className="blog-post-title">{title}</h1>

            <p className="blog-post-intro">{intro}</p>
          </div>

          {/* Content */}
          <div className="blog-post-content">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

// Helper component for section headings
export function BlogSection({ children }: { children: ReactNode }) {
  return <h2 className="blog-section-heading">{children}</h2>
}

// Helper component for paragraphs
export function BlogParagraph({ children }: { children: ReactNode }) {
  return <p className="blog-paragraph">{children}</p>
}

// Helper component for multi-line text (preserves line breaks)
export function BlogText({ children }: { children: string }) {
  return (
    <p className="blog-paragraph blog-text-multiline">
      {children.split('\n').map((line, i) => (
        <span key={i}>
          {line.trim()}
          {i < children.split('\n').length - 1 && <br />}
        </span>
      ))}
    </p>
  )
}

// Helper component for code blocks
export function BlogCodeBlock({ children, language }: { children: ReactNode; language?: string }) {
  return (
    <div className="blog-code-block">
      {language && <span className="blog-code-language">{language}</span>}
      <pre><code>{children}</code></pre>
    </div>
  )
}

// Helper component for inline code
export function BlogCode({ children }: { children: ReactNode }) {
  return <code className="blog-inline-code">{children}</code>
}

// Helper component for lists
export function BlogList({ children, ordered = false }: { children: ReactNode; ordered?: boolean }) {
  const Component = ordered ? 'ol' : 'ul'
  return <Component className={ordered ? 'blog-ordered-list' : 'blog-list'}>{children}</Component>
}

// Helper component for list items
export function BlogListItem({ children }: { children: ReactNode }) {
  return <li className="blog-list-item">{children}</li>
}

// Helper component for blockquotes
export function BlogQuote({ children }: { children: ReactNode }) {
  return <blockquote className="blog-quote">" {children} "</blockquote>
}

// Helper component for links
export function BlogLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="blog-link">
      {children}
    </a>
  )
}


export function Author() {
  return (
      <p className="blog-post-author"><strong>- sridevi</strong></p>

  )
}



