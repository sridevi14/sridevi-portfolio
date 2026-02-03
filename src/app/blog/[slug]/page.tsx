import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Blog post content - in a real app, this would come from a CMS or markdown files
const blogPostsContent: Record<string, { title: string; date: string; content: string[] }> = {
  'building-automation-tools': {
    title: 'Building Automation Tools with Python',
    date: 'Jan 15, 2026',
    content: [
      'Automation is one of the most powerful applications of programming. In this post, I\'ll share my experience building InstaReelBot and the lessons I learned along the way.',
      'The key to good automation is understanding the workflow you want to automate. Break it down into discrete steps, identify potential failure points, and build in error handling from the start.',
      'Python is an excellent choice for automation tasks due to its extensive library ecosystem. Libraries like requests, selenium, and various API wrappers make it easy to interact with web services.',
      'One important consideration is rate limiting. Most APIs have limits on how many requests you can make. Implement exponential backoff and respect the service\'s terms of use.',
      'Testing automation tools can be tricky since they often interact with external services. Consider using mock servers for development and always have a staging environment before deploying to production.'
    ]
  },
  'frontend-architecture-patterns': {
    title: 'Frontend Architecture Patterns',
    date: 'Dec 28, 2025',
    content: [
      'As frontend applications grow in complexity, having a solid architecture becomes crucial. Here are some patterns I\'ve found effective for building scalable React applications.',
      'Component composition is fundamental. Build small, focused components that do one thing well. Use composition to combine them into more complex UIs rather than building monolithic components.',
      'State management can make or break your application. For simple apps, React\'s built-in useState and useContext are often sufficient. For more complex state, consider libraries like Zustand or Redux Toolkit.',
      'Separating concerns is key. Keep your business logic separate from your UI components. Custom hooks are excellent for encapsulating logic that can be reused across components.',
      'Don\'t forget about performance. Use React.memo for expensive components, implement virtualization for long lists, and lazy load routes and heavy components.'
    ]
  },
  'color-theory-web-design': {
    title: 'Color Theory in Web Design',
    date: 'Dec 10, 2025',
    content: [
      'Color is one of the most powerful tools in a designer\'s arsenal. Understanding color theory can help you create more visually appealing and effective designs.',
      'The color wheel is your friend. Complementary colors (opposite on the wheel) create contrast, while analogous colors (adjacent) create harmony. Use this to guide your palette choices.',
      'In ColorSnap, I implemented algorithms to extract dominant colors from images. The key is clustering similar colors together using algorithms like k-means clustering.',
      'Accessibility should always be a consideration. Ensure sufficient contrast ratios between text and backgrounds. Tools like the WCAG contrast checker can help validate your choices.',
      'Don\'t underestimate the power of white space and neutral colors. They give your primary colors room to breathe and help establish visual hierarchy.'
    ]
  },
  'cloud-infrastructure-guide': {
    title: 'Getting Started with Cloud Infrastructure',
    date: 'Nov 25, 2025',
    content: [
      'Cloud computing has revolutionized how we deploy and scale applications. Here\'s a beginner-friendly guide to getting started with AWS.',
      'Start with the basics: EC2 for compute, S3 for storage, and RDS for databases. These three services cover most common use cases and are well-documented.',
      'Infrastructure as Code (IaC) is essential for reproducible deployments. Tools like Terraform or AWS CloudFormation let you define your infrastructure in version-controlled files.',
      'Security is paramount. Use IAM roles and policies to implement the principle of least privilege. Never hardcode credentials in your application code.',
      'Cost management is often overlooked. Set up billing alerts, use reserved instances for predictable workloads, and regularly review your resource usage.'
    ]
  },
  'restful-apis-nodejs': {
    title: 'Building RESTful APIs with Node.js',
    date: 'Nov 10, 2025',
    content: [
      'Node.js is a fantastic platform for building APIs. Its event-driven, non-blocking I/O model makes it perfect for handling many concurrent connections.',
      'Express.js remains the most popular framework for building APIs in Node.js. It\'s minimal, flexible, and has a huge ecosystem of middleware.',
      'Structure matters. Organize your code into routes, controllers, services, and models. This separation makes your code easier to test and maintain.',
      'Input validation is crucial for security. Use libraries like Joi or express-validator to validate incoming data before processing it.',
      'Don\'t forget documentation. Tools like Swagger/OpenAPI make it easy to document your endpoints and even generate client libraries automatically.'
    ]
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPostsContent[slug]

  if (!post) {
    return (
      <>
        <CustomCursor />
        <Header />
        <main>
          <section className="blog-hero">
            <div className="blog-hero-content">
              <h1>Post Not Found</h1>
              <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
              <Link href="/blog" className="btn" style={{ marginTop: '2rem', display: 'inline-block' }}>
                ← Back to Blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <section className="blog-hero">
          <div className="blog-hero-content">
            <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '1rem', display: 'inline-block' }}>
              ← Back to Blog
            </Link>
            <h1>{post.title}</h1>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              {post.date}
            </p>
          </div>
        </section>

        <section className="blog-section">
          <div style={{ maxWidth: '800px' }}>
            {post.content.map((paragraph, index) => (
              <p key={index} style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.9', 
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPostsContent).map((slug) => ({
    slug,
  }))
}
