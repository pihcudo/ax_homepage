import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Business from '@/components/sections/Business'
import Value from '@/components/sections/Value'
import Clients from '@/components/sections/Clients'
import News from '@/components/sections/News'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Business />
      <Value />
      <Clients />
      <News />
    </main>
  )
}
