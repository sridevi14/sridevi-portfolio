'use client'

import { useEffect, useRef } from 'react'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="reveal" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-cta">
            <h3>Looking to collaborate?</h3>
            <p>I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          </div>
          <a href="mailto:sridevimanjuraja@gmail.com" className="getin-btn">
            Get in Touch
          </a>
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="https://github.com/sridevi14" target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sridevimanjuraja/" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/sridevi.tech/" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>
            </a>
            <a href="mailto:sridevimanjuraja@gmail.com">
              <span>Email</span>
            </a>
            <a href="https://buymeacoffee.com/sridevi14" target="_blank" rel="noopener noreferrer">
    <span>☕ Buy Me a Coffee</span>
  </a>
          </div>
          <div className="footer-location">
            📍 Chennai, India
          </div>
          <div className="footer-copy">© 2026 Sridevi. All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}
