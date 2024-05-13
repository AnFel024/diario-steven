export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
      <h3 className="h3 py-10 px-8 md:py-16 md:px-12">Te quiero mucho flaco, gracias por llegar hasta aca y ten muy presente que contigo voy sin prisa y sin pausa. Con cariño, Andrés Morales</h3>
    </>
  )
}
