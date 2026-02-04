import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-label">Full-Stack Engineer | AI & Cloud</div>

        <h1>
          <span className="line greeting">Hello, I'm</span>
          <span className="line name">Sridevi Manju</span>
        </h1>

        <p className="hero-tagline">
          Building scalable AI-powered systems
        </p>

        <p className="hero-description">
          Full-stack engineer specializing in AI, cloud infrastructure, and scalable web applications.
          Currently building Hyrenet and engineering solutions at HCL GUVI.
        </p>

        <div className="hero-links">
          <Link href="#projects" className="btn btn-primary">View Projects</Link>
          <a href="mailto:sridevimanjuraja@gmail.com" className="btn">Get in Touch</a>
        </div>
      </div>

      <div className="hero-image">
        <div className="orbit-container">
          <div className="orbit orbit-1">
            <div className="orbit-dot"></div>
          </div>
          <div className="orbit orbit-2">
            <div className="orbit-dot"></div>
          </div>
          <div className="orbit orbit-3">
            <div className="orbit-dot"></div>
          </div>
          <div className="orbit orbit-4"></div>
          <div className="image-wrapper">
            <Image
              src="/images/profile.png"
              alt="Sridevi"
              fill
              sizes="(max-width: 768px) 220px, (max-width: 1024px) 280px, 380px"
              priority
              className="profile-image"
            />
          </div>
        </div>
      </div>

      <div className="floating-element float-1">// code</div>
      <div className="floating-element float-2">// create</div>
      <div className="floating-element float-3">// deploy</div>
      <div className="floating-element float-4">// debug</div>
    </section>
  )
}