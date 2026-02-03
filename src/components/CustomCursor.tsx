'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
      if (follower) {
        follower.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
