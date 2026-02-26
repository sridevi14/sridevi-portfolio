import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "SrideviManju | Full-Stack Engineer",
    template: "%s | Sridevi Manju",
  },
  description:
    "Portfolio of SrideviManju, Full-Stack Engineer specializing in AI, Cloud, and modern web technologies.",
  keywords: [
    "Sridevi Manju",
    "SrideviManju",
    "Sridevi",
    "manju",
    "Full Stack Engineer",
    "AI Engineer",
    "Portfolio",
    "Cloud Engineer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "SrideviManju", url: "https://www.sridevi.me" }],
  creator: "SrideviManju",
  publisher: "SrideviManju",
  metadataBase: new URL("https://www.sridevi.me"),

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "SrideviManju | Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in AI, Cloud Infrastructure, and modern web technologies.",
    url: "https://www.sridevi.me",
    siteName: "SrideviManju Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "SrideviManju Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SrideviManju | Full-Stack Engineer",
    description:
      "Portfolio of SrideviManju – AI, Cloud & Full-Stack Engineer",
    images: ["/images/preview.png"],
    creator: "@srideviimanju",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // <meta name="google-site-verification" content="4iS8kO0xY1A4WXmH43o-wCMTttsbHtGrrUqGjRudJAk" />
  verification: {
    // Add your Google Search Console verification code here
    google:"4iS8kO0xY1A4WXmH43o-wCMTttsbHtGrrUqGjRudJAk",
  },
}

// JSON-LD Structured Data for Person
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sridevi Manju",
  alternateName: "SrideviManju",
  url: "https://www.sridevi.me",
  image: "https://www.sridevi.me/images/profile.png",
  sameAs: [
    "https://github.com/sridevi14",
    "https://www.linkedin.com/in/sridevimanjuraja/",
    "https://www.instagram.com/sridevi.tech/",
    "https://buymeacoffee.com/sridevi14"
  ],
  jobTitle: "Full-Stack Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
  },
  description:
    "Full-Stack Engineer specializing in AI, Cloud Infrastructure, and scalable web technologies.",
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Cloud Computing",
    "AI/ML",
    "Web Development",
  ],
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B9VLN0HMQR"></script>
 <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-B9VLN0HMQR"
  />

  {/* Google Analytics Config */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-B9VLN0HMQR');
      `,
    }}
  />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
