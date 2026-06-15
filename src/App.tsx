import { About } from '@/components/sections/About/About'
import { Audience } from '@/components/sections/Audience/Audience'
import { Footer } from '@/components/sections/Footer/Footer'
import { Header } from '@/components/sections/Header/Header'
import { Hero } from '@/components/sections/Hero/Hero'
import { Numbers } from '@/components/sections/Numbers/Numbers'
import { Partnership } from '@/components/sections/Partnership/Partnership'
import { Seo } from '@/components/Seo/Seo'

function App() {
  return (
    <div className="app-shell">
      <Seo />
      <Header />
      <main>
        <Hero />
        <About />
        <Audience />
        <Numbers />
        <Partnership />
      </main>
      <Footer />
    </div>
  )
}

export default App
