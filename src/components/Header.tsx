'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="logo">&lt;/&gt; Sridevi</div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <div className="header-controls">
          <button 
            className={`icon-btn music-toggle ${isPlaying ? 'playing' : ''}`}
            onClick={toggleMusic}
            aria-label="Toggle background music"
          >
            ♪
          </button>
          <button 
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '🌙'}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>


      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
          <Link href="/#about" onClick={closeMobileMenu}>About</Link>
          <Link href="/#projects" onClick={closeMobileMenu}>Projects</Link>
          <Link href="/blog" onClick={closeMobileMenu}>Blog</Link>
        </nav>
      </div>

      <audio ref={audioRef} loop>
        <source src="https://res.cloudinary.com/diaow3hbp/video/upload/v1770144043/background_htxt7b.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}
