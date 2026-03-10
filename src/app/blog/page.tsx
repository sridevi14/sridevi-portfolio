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
    date: 'Feb 25, 2026',
    title: 'Will AI Replace Developers? Here\'s What I Actually Think',
    description: 'AI can generate code, but software development is more than typing. Here’s my honest take on how AI is changing the developer role — and why it’s not replacing us.',
    slug: 'will-ai-replace-developers-heres-what-i-actually-think',
    category: 'Opinion',
    tags: ['AI', 'Software Development', 'Developers', 'Programming', 'Tech Career'],
    readTime: '4 min read'
  },
    {
    date: 'March 4, 2026',
    title: 'Just Start. Even Now.',
    description: 'It\'s been two months. And I have some thoughts.',
    slug: 'just-start-even-now',
    category: 'Personal Growth',
    tags: ['Personal Growth',
  'Self Discovery',
  'Mindset',
  'Overthinking',
  'Consistency',
  'Starting'],
    readTime: '3 min read'
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
            <span className="blog-hero-label">WRITING</span>
            <h1>Blog</h1>
            <p className="blog-hero-description">
              Thoughts on software engineering, web development, and the technologies I work with.
              I write about building products, automation, and lessons learned along the way.
            </p>
            <div className="blog-stats">
              <div className="blog-stat">
                <span className="blog-stat-number">{blogPosts.length}</span>
                <span className="blog-stat-label">Articles</span>
              </div>
              <div className="blog-stat-divider" />
              <div className="blog-stat">
                <span className="blog-stat-number">2025—26</span>
                <span className="blog-stat-label">Archive</span>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="blog-list-container">
            {blogPosts.map((post, index) => (
              <article className="blog-list-item" key={post.slug} style={{ animationDelay: `${index * 0.1}s` }}>
                <Link href={`/blog/${post.slug}`} className="blog-list-link">
                  <div className="blog-list-marker">
                    <span className="blog-list-dot" />
                    <span className="blog-list-line" />
                  </div>
                  <div className="blog-list-content">
                    <div className="blog-list-meta">
                      <span className="blog-list-category">{post.category}</span>
                      <span className="blog-list-divider" />
                      <time className="blog-list-date">{post.date}</time>
                      <span className="blog-list-divider" />
                      <span className="blog-list-readtime">{post.readTime}</span>
                    </div>
                    <h2 className="blog-list-title">{post.title}</h2>
                    <p className="blog-list-description">{post.description}</p>
                    <div className="blog-list-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="blog-list-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="blog-list-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
