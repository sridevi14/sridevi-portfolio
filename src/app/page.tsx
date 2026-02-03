import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Quotes from '@/components/Quotes'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Quotes />
      </main>
      <Footer />
    </>
  )
}
