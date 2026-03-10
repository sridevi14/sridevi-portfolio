import type { Metadata } from "next";
import BlogPostLayout, {
  BlogSection,
  BlogParagraph,
  BlogText,
  BlogCodeBlock,
  BlogCode,
  BlogList,
  BlogListItem,
  BlogQuote,
  BlogLink,
  Author
} from '@/components/BlogPostLayout'

// Blog post content - in a real app, this would come from a CMS or markdown files
interface BlogPost {
  title: string
  date: string
  category: string
  readTime: string
  intro: string
  content: React.ReactNode
}

const blogPostsContent: Record<string, BlogPost> = {
  'will-ai-replace-developers-heres-what-i-actually-think': {
    title: 'Will AI Replace Developers? Here\'s What I Actually Think',
    date: 'Feb 25, 2026',
    category: 'AI & Development',
    readTime: '5 min read',
    intro: 'AI can generate code, but software development is more than typing. Here\'s my honest take on how AI is changing the developer role — and why it\'s not replacing us.',
    content: (
      <>
        <BlogText>
        {`Everyone keeps asking this. I was asking it too.
        But the more I use AI in my work, the more I think we're all worried about the wrong thing.`}</BlogText>

        <BlogSection>Let me be honest about something
        </BlogSection>
        <BlogText>{`Coding can be boring.
It's not always building some brilliant new architecture or solving an elegant algorithm. Most days, it's reopening documentation for something you've already used ten times. It's setting up the same folder structure again. Writing validation logic you've written in five other projects. Debugging an issue for two hours only to realize you forgot one small condition.

You already know what you're trying to build.
The logic is clear in your head. The feature makes sense. The system design is there.

Getting from an idea to something that actually runs usually means going through the same steps again and again. It's not difficult work. It's just repetitive. Small things that slowly eat up your time.

That's where these new tools actually help. It handles the boilerplate. It suggests the structure. It catches the obvious mistakes. It saves you from rewriting the same setup code for the tenth time this year.
Honestly? I don't find that scary.

I find that relieving.`}</BlogText>


        <BlogSection>What AI is good at — and where it falls short
        </BlogSection>
        <BlogText>
          {`AI is great at repetitive tasks. It has seen similar patterns thousands of times — so yes, it can write boilerplate, build features, and even scaffold an entire system if you give it the right context. That part is genuinely impressive.

But here’s the thing: writing code is often the easiest part of the job. The harder part is everything around it.

Will this cause a production issue?
Does it handle edge cases?
Will it scale?
Does it truly match the business logic?
Are we going to regret this decision six months from now?

AI generates code based on patterns. It can suggest solutions. But it doesn’t live inside your system.

When I work on a feature, I’m thinking beyond syntax — how it connects to other services, how it affects performance. I’m considering trade-offs, anticipating future needs, and making judgment calls that require a deep understanding of the system.`}
        </BlogText>

        <BlogCode>
          That kind of thinking comes from experience — from being inside the system every day.
        </BlogCode>
<BlogText>
          {`
AI can assist.
But it doesn’t carry responsibility. Not yet.
          `}
    </BlogText>
        <BlogSection>The job is shifting, not disappearing
        </BlogSection>
        <BlogText>
          {`Here's what I've noticed in my own work. I spend less time writing code from scratch. And more time thinking. That's actually the part I enjoy most. And now I get to do more of it.
Think of it like this — AI is like a fast assistant who's great at doing tasks. But you're still the one who decides what to build, how to build it, and whether it's actually the right call. The role of a developer is evolving. We're becoming more like architects and problem solvers, and less like typists. And honestly? I think that's a good thing.`}
        </BlogText>
        <BlogQuote>
          Writing code was never the hard part. Understanding what you're building — that's where the real work is.
        </BlogQuote>
        <BlogSection>Don't skip the basics — seriously
        </BlogSection>
        <BlogText>
          {`I see people saying "just use AI, you don't need to learn coding anymore." And I strongly disagree.

When something breaks in production, AI can help — but you need to understand the error first. When code looks wrong, you need to be able to spot it. When AI gives you a bad answer (and it does), you need to know it's bad.
The stronger your basics, the better you'll use AI. There's no shortcut around that.
`}
        </BlogText>
        <BlogSection>
          So, will AI replace developers?
        </BlogSection>
        <BlogText>
          {`No. But the developers who refuse to adapt will struggle.
The ones who learn how to work with AI — use it for the boring stuff, focus their energy on the thinking — they'll move faster than ever.
To me that sounds less like a threat and more like finally getting to spend time on the work that actually matters.

I’m curious how other developers are experiencing this shift.
`}
        </BlogText>
        <BlogQuote>
          Nobody was celebrating how many lines of code they typed. We celebrate what we shipped, what we solved, what we figured out.
        </BlogQuote>
         <Author></Author>
      </>
    )
  },
  'just-start-even-now': {
    title: 'Just Start.\nEven Now.',
    date: 'March 11, 2026',
    category: 'Personal Growth',
    readTime: '3 min read',
    intro: 'It\'s been two months. And I have some thoughts.',
    content: (
<>
  <BlogText>
    {`It's been two months since the year started, and I've had a lot of thoughts sitting in my head that I finally wanted to write down.

I'm not a "new year, new me" person. Never was. That whole January energy never really made sense to me. But somehow I was still waiting. Not for January. Just for the right moment. The right mood. When things were less busy. When I felt more ready. When everything felt aligned enough to finally begin.

And that waiting? It went on longer than I expected.

I think planning became my way of feeling productive without actually doing anything. Making lists, thinking about how it would go, imagining the whole process — all of that felt good for a moment. Like progress. But then the actual doing part showed up. And it was messy. Uncomfortable. Nothing like what I imagined. So I waited again. And somehow there was always another reason to wait — another day, another mood, another excuse that felt reasonable at the time.

This year I just got tired of that honestly.

Instead of waiting, I started following whatever felt even slightly interesting in that moment. Not because I had a plan. Not because the timing was perfect. just because something pulled my attention for a second — and i followed it.

I didn’t really have a goal. the path felt uncertain, and i wasn’t planning where any of it would lead. i was just trying things and seeing what happened.

I might think something is perfect for me. I plan it, I imagine myself in it — but once I start, I realiseed I don't even like it. I lose interest. And then you feel guilty for quitting.
Yet, it’s all part of the process. It’s about figuring things out, testing what works, and exploring different paths. Progress isn’t always visible, and that’s okay. The important part is learning and experimenting, not having a neat, linear story.

Leaving something doesn't always mean failure — sometimes it's just clarity.

And sometimes while trying one thing, I stumbled into something unexpected — something I wasn’t even looking for, but it felt a little more like mine.
`}
  </BlogText>

  <BlogQuote>
    {"You don't really discover those things by waiting. You only find them by moving."}
  </BlogQuote>

  <BlogText>
    {`
The consistency pressure used to get to me too. If I missed a few days, I'd spiral and feel like I ruined everything. But lately I've realised — if something genuinely belongs in your life, you come back to it. Not because you force yourself. Just because it keeps pulling you back. And if it doesn't pull you back, maybe it was never really yours to begin with. I think that's okay.

I'm slowly starting to accept that maybe figuring life out just looks like experimenting. Trying things, dropping some, and sometimes finding something that actually sticks. Maybe that's just how you figure out what's yours.
`}
  </BlogText>

  <BlogQuote>
    {`Try anything. I mean it — try everything that pulls you even for a second.`}
        </BlogQuote>
        <Author></Author>

</>
    )
  },
  'frontend-architecture-patterns': {
    title: 'Frontend Architecture Patterns',
    date: 'Dec 28, 2025',
    category: 'Architecture',
    readTime: '8 min read',
    intro: 'As frontend applications grow in complexity, having a solid architecture becomes crucial. Here are patterns I\'ve found effective for building scalable React applications.',
    content: (
      <>
        <BlogSection>Component Composition</BlogSection>
        <BlogParagraph>
          Component composition is fundamental. Build small, focused components that do one thing well. Use composition
          to combine them into more complex UIs rather than building monolithic components with countless props.
        </BlogParagraph>

        <BlogSection>State Management Strategy</BlogSection>
        <BlogParagraph>
          State management can make or break your application. My rule of thumb:
        </BlogParagraph>
        <BlogList ordered>
          <BlogListItem>Start with local state (<BlogCode>useState</BlogCode>)</BlogListItem>
          <BlogListItem>Lift state up when needed</BlogListItem>
          <BlogListItem>Use Context for truly global state (theme, user, auth)</BlogListItem>
          <BlogListItem>Reach for external libraries only when necessary</BlogListItem>
        </BlogList>

        <BlogSection>Separating Concerns</BlogSection>
        <BlogParagraph>
          Separating concerns is key. Keep your business logic separate from your UI components. Custom hooks are
          excellent for encapsulating logic that can be reused across components.
        </BlogParagraph>
        <BlogCodeBlock language="typescript">{`// Custom hook for data fetching
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}`}</BlogCodeBlock>

        <BlogSection>Performance Considerations</BlogSection>
        <BlogParagraph>
          Don&apos;t forget about performance. Use <BlogCode>React.memo</BlogCode> for expensive components, implement
          virtualization for long lists, and lazy load routes and heavy components.
        </BlogParagraph>
      </>
    )
  },
  'color-theory-web-design': {
    title: 'Color Theory in Web Design',
    date: 'Dec 10, 2025',
    category: 'Design',
    readTime: '6 min read',
    intro: 'Color is one of the most powerful tools in a designer\'s arsenal. Understanding color theory can help you create more visually appealing and effective designs.',
    content: (
      <>
        <BlogSection>The Color Wheel</BlogSection>
        <BlogParagraph>
          The color wheel is your friend. Complementary colors (opposite on the wheel) create contrast, while analogous
          colors (adjacent) create harmony. Use this to guide your palette choices.
        </BlogParagraph>

        <BlogSection>Extracting Colors from Images</BlogSection>
        <BlogParagraph>
          In ColorSnap, I implemented algorithms to extract dominant colors from images. The key is clustering similar
          colors together using algorithms like k-means clustering.
        </BlogParagraph>

        <BlogSection>Accessibility First</BlogSection>
        <BlogParagraph>
          Accessibility should always be a consideration. Ensure sufficient contrast ratios between text and backgrounds.
          Tools like the <BlogLink href="https://webaim.org/resources/contrastchecker/">WCAG contrast checker</BlogLink> can help validate your choices.
        </BlogParagraph>
        <BlogQuote>
          Good design is accessible design. If your color choices exclude users with visual impairments, you&apos;re doing it wrong.
        </BlogQuote>

        <BlogSection>The Power of Neutrals</BlogSection>
        <BlogParagraph>
          Don&apos;t underestimate the power of white space and neutral colors. They give your primary colors room to breathe
          and help establish visual hierarchy.
        </BlogParagraph>
      </>
    )
  },
  'cloud-infrastructure-guide': {
    title: 'Getting Started with Cloud Infrastructure',
    date: 'Nov 25, 2025',
    category: 'DevOps',
    readTime: '10 min read',
    intro: 'Cloud computing has revolutionized how we deploy and scale applications. Here\'s a beginner-friendly guide to getting started with AWS and modern deployment strategies.',
    content: (
      <>
        <BlogSection>Start with the Basics</BlogSection>
        <BlogParagraph>
          Start with the basics: EC2 for compute, S3 for storage, and RDS for databases. These three services cover
          most common use cases and are well-documented.
        </BlogParagraph>

        <BlogSection>Infrastructure as Code</BlogSection>
        <BlogParagraph>
          Infrastructure as Code (IaC) is essential for reproducible deployments. Tools like <BlogLink href="https://www.terraform.io/">Terraform</BlogLink> or
          AWS CloudFormation let you define your infrastructure in version-controlled files.
        </BlogParagraph>
        <BlogCodeBlock language="hcl">{`resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "WebServer"
  }
}`}</BlogCodeBlock>

        <BlogSection>Security Best Practices</BlogSection>
        <BlogParagraph>
          Security is paramount. Use IAM roles and policies to implement the principle of least privilege.
          Never hardcode credentials in your application code.
        </BlogParagraph>

        <BlogSection>Cost Management</BlogSection>
        <BlogParagraph>
          Cost management is often overlooked. Set up billing alerts, use reserved instances for predictable
          workloads, and regularly review your resource usage.
        </BlogParagraph>
      </>
    )
  },
  'restful-apis-nodejs': {
    title: 'Building RESTful APIs with Node.js',
    date: 'Nov 10, 2025',
    category: 'Backend',
    readTime: '7 min read',
    intro: 'Node.js is a fantastic platform for building APIs. Its event-driven, non-blocking I/O model makes it perfect for handling many concurrent connections.',
    content: (
      <>
        <BlogSection>Why Express?</BlogSection>
        <BlogParagraph>
          Express.js remains the most popular framework for building APIs in Node.js. It&apos;s minimal, flexible,
          and has a huge ecosystem of middleware.
        </BlogParagraph>

        <BlogSection>Project Structure</BlogSection>
        <BlogParagraph>
          Structure matters. Organize your code into routes, controllers, services, and models. This separation
          makes your code easier to test and maintain.
        </BlogParagraph>
        <BlogCodeBlock language="bash">{`src/
├── controllers/     # Request handlers
├── services/        # Business logic
├── models/          # Database models
├── routes/          # Route definitions
├── middleware/      # Custom middleware
└── utils/           # Helper functions`}</BlogCodeBlock>

        <BlogSection>Input Validation</BlogSection>
        <BlogParagraph>
          Input validation is crucial for security. Use libraries like <BlogCode>Joi</BlogCode> or <BlogCode>express-validator</BlogCode> to
          validate incoming data before processing it.
        </BlogParagraph>

        <BlogSection>Documentation</BlogSection>
        <BlogParagraph>
          Don&apos;t forget documentation. Tools like <BlogLink href="https://swagger.io/">Swagger/OpenAPI</BlogLink> make it easy to document your
          endpoints and even generate client libraries automatically.
        </BlogParagraph>
      </>
    )
  }
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = blogPostsContent[params.slug];

  if (!post) {
    return {
      title: "Post Not Found | Sridevi Manju",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.intro,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.intro,
      url: `https://www.sridevi.me/blog/${params.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Sridevi Manju"],
      images: [
        {
          url: "/images/preview.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.intro,
      images: ["/images/preview.png"],
      creator: "@srideviimanju",
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPostsContent[slug]

  if (!post) {
    return (
      <BlogPostLayout
        title="Post Not Found"
        date=""
        category="Error"
        readTime=""
        intro="The blog post you're looking for doesn't exist."
      >
        <BlogParagraph>
          Please check the URL or go back to the blog listing page.
        </BlogParagraph>
      </BlogPostLayout>
    )
  }

  return (
    <BlogPostLayout
      title={post.title}
      date={post.date}
      category={post.category}
      readTime={post.readTime}
      intro={post.intro}
    >
      {post.content}
    </BlogPostLayout>
  )
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPostsContent).map((slug) => ({
    slug,
  }))
}
