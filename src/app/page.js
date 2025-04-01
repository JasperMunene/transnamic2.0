import AboutUs from '@/components/AboutUs/AboutUs';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero'
import Marquee from '@/components/Marquee/Marquee';
import Navbar from '@/components/Navbar/Navbar'
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <Marquee />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}