'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    icon: '🤖',
    title: 'InstaReelBot',
    description: 'A simple bot that automates creating and posting Instagram Reels. It generates videos, uploads them to Cloudinary, and posts to Instagram with notifications via Twilio.',
    link: 'https://github.com/sridevi14/InstaReelBot',
    tech: ['Python', 'Instagram API', 'Cloudinary', 'Twilio']
  },
  {
    icon: '🔧',
    title: 'PostBuddy',
    description: 'A beautiful, frontend-only web app that extracts dominant color palettes from images. Built with Next.js, React, and Tailwind CSS.',
    link: 'https://post-buddy-ashy.vercel.app/',
    tech: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    icon: '🎨',
    title: 'ColorSnap',
    description: 'A lightweight, frontend-only API testing tool for developers. Send HTTP requests, inspect responses, and organize your API workflows — no accounts, no backend, no data leaving your browser.',
    link: 'https://colorsnap-six.vercel.app/',
    tech: ['JavaScript', 'Local Storage', 'REST API']
  }
]

export default function Projects() {
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
    <section id="projects" className="reveal" ref={sectionRef}>
      <div className="section-header">
        <span className="section-number">02</span>
        <h2>Featured Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View →
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span className="tech-tag" key={techIndex}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
