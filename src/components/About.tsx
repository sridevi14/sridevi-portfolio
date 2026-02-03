'use client'

import { useEffect, useRef } from 'react'

const infoCards = [
  {
    label: 'FOCUS',
    value: 'Full-Stack Development, AI/ML Integration, Modern Web Apps'
  },
  {
    label: 'SPECIALIZATION',
    value: 'React, Next.js, Golang, Python, Cloud Solutions'
  },
  {
    label: 'LOCATION',
    value: 'Based in Chennai, India'
  },
  {
    label: 'STATUS',
    value: 'Available for Freelance & Full-Time Opportunities'
  }
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

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

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="reveal" ref={sectionRef}>
      <div className="section-header">
        <span className="section-number">01</span>
        <h2>About Me</h2>
      </div>
      <div className="about-text">
        <p>
          I&apos;m a software engineer who builds tools that solve real problems. I work across the full stack — from designing intuitive interfaces to architecting scalable backend systems and cloud infrastructure.
        </p>
        <p>
          What excites me most is applying AI practically to make systems smarter and workflows more efficient. I focus on clean code, thoughtful design, and building products that people actually want to use.
        </p>
      </div>
      
      <div className="info-cards">
        {infoCards.map((card, index) => (
          <div className="info-card" key={index}>
            <span className="info-label">{card.label}</span>
            <p className="info-value">{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
