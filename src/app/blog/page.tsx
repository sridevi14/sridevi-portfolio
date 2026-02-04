import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, web development, AI, and cloud technologies by Sridevi Manju. Read about building products, automation, and lessons learned.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | SrideviManju",
    description: "Thoughts on software engineering, web development, AI, and cloud technologies.",
    url: "https://www.sridevi.me/blog",
    type: "website",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "SrideviManju Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | SrideviManju",
    description: "Thoughts on software engineering, web development, AI, and cloud technologies.",
    images: ["/images/preview.png"],
  },
}

const blogPosts = [
  {
    date: 'Jan 15, 2026',
    title: 'Building Automation Tools with Python',
    description: 'A deep dive into creating efficient automation workflows',
    slug: 'building-automation-tools'
  },
  {
    date: 'Dec 28, 2025',
    title: 'Frontend Architecture Patterns',
    description: 'Best practices for scalable React applications',
    slug: 'frontend-architecture-patterns'
  },
  {
    date: 'Dec 10, 2025',
    title: 'Color Theory in Web Design',
    description: 'How to create beautiful color palettes programmatically',
    slug: 'color-theory-web-design'
  },
  {
    date: 'Nov 25, 2025',
    title: 'Getting Started with Cloud Infrastructure',
    description: 'A beginner-friendly guide to AWS and deployment strategies',
    slug: 'cloud-infrastructure-guide'
  },
  {
    date: 'Nov 10, 2025',
    title: 'Building RESTful APIs with Node.js',
    description: 'Creating scalable backend services from scratch',
    slug: 'restful-apis-nodejs'
  }
]

export default function BlogPage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <section className="blog-hero">
          <div className="blog-hero-content">
            <h1>Blog</h1>
            <p>
              Thoughts on software engineering, web development, and the technologies I work with.
              I write about building products, automation, and lessons learned along the way.
            </p>
          </div>
        </section>

        {/* <section className="blog-section">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} className="blog-post" key={index}>
                <div className="blog-date">{post.date}</div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
                <div className="blog-arrow">→</div>
              </Link>
            ))}
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  )
}
