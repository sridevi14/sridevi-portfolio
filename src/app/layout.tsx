import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sridevi - Software Engineer',
  description: 'Full-stack engineer specializing in AI, cloud infrastructure, and modern web technologies. Based in Chennai, India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
