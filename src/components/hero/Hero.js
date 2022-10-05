import React from 'react'
import { useState } from 'react'

const Hero = () => {
  const [activeNav, setActiveNav] = useState('');
  return (

    <div><section class="bg-gray-800 text-gray-100">
    <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
      <h1 class="text-4xl font-bold leading-none sm:text-5xl">We are a fast-growing <span class="dark:text-violet-400">SaaS-based start-up</span> with a very talented and rapidly expanding team.
      </h1>
      <p class="px-8 mt-8 mb-12 text-lg">We develop cutting-edge Al driven Social, FinTech, PropTech & EdTech Apps.</p>
      <div class="flex flex-wrap justify-center">
      <a href="#contact" onClick = {() => setActiveNav('#about')} class="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get in touch</a>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero