import React from 'react';
import AboutUs from './about/page';
import Hero from '@/components/Hero/Hero';
import Marquee from '@/components/Marquee/Marquee';
import Portfolio from '@/components/Portfolio/Portfolio';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <WhatWeDo />
      <AboutUs />
      {/* <Marquee /> */}
      <Portfolio />
      
      
    </main>
  );
}