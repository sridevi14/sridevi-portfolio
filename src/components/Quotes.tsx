'use client'

import { useEffect, useState } from 'react'

const quotes = [
  "“Just make it exist first. You can make it good later.”",
  "“It’s all about finding the calm in the chaos.”"
]

export default function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="quotes-section">
      <div className="quotes-container">
        <p className={`quote-text ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          {quotes[currentIndex]}
        </p>
      </div>
      <div className="quote-dots">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`quote-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setIsAnimating(true)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsAnimating(false)
              }, 300)
            }}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
