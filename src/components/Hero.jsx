import React, { useEffect, useState } from 'react'
import orangeImg from '../assets/orange.png'
import greenImg from '../assets/green.png'
import redImg from '../assets/red.png'
import blueImg from '../assets/blue.png'
import { Link } from 'react-router-dom'

const Hero = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    { bgColor: 'from-orange-500 via-amber-500 to-red-500', image: orangeImg, alt: 'Stylish tech essentials' },
    { bgColor: 'from-lime-500 via-emerald-500 to-teal-500', image: greenImg, alt: 'Premium gadget showcase' },
    { bgColor: 'from-fuchsia-500 via-pink-500 to-orange-500', image: redImg, alt: 'Minimal tech setup' },
    { bgColor: 'from-sky-700 via-indigo-700 to-violet-700', image: blueImg, alt: 'Bold gaming gear' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlide = slides[currentIndex]
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-950'
  const badgeBg = theme === 'dark' ? 'bg-white/10 text-cyan-300 border-white/10' : 'bg-slate-950/10 text-cyan-700 border-slate-900/10'

  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)

  return (
    <section className={`relative overflow-hidden bg-linear-to-br ${currentSlide.bgColor} py-20 transition-all duration-1000 ease-out`}>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.12),transparent_30%)] pointer-events-none' />
      <div className='container mx-auto px-4 md:px-8 lg:px-16 relative'>
        <div className='grid gap-12 lg:grid-cols-[1fr_520px] items-center'>
          <div className='space-y-6' data-aos='fade-right' data-aos-duration='1200'>
            <span className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] ${badgeBg}`}>Tech Shell</span>
            <h1 className={`max-w-3xl text-5xl font-black leading-tight tracking-tight ${textColor}`}>
              Upgrade your setup with premium tech, fast delivery, and standout style.
            </h1>
            <p className='max-w-2xl text-lg text-white/80'>Discover curated audio, accessories, power gear, and desktop essentials designed for creators and gamers.</p>
            <div className='flex flex-wrap gap-4'>
              <Link to='/shop' className='inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>Shop Collections</Link>
              <Link to='/about' className='inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20'>Learn More</Link>
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-slate-950/10' data-aos='fade-up' data-aos-delay='200'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-200'>Free shipping</p>
                <p className='mt-3 text-xl font-semibold text-white'>On all orders over $50</p>
              </div>
              <div className='rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-slate-950/10' data-aos='fade-up' data-aos-delay='300'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-200'>24/7 support</p>
                <p className='mt-3 text-xl font-semibold text-white'>Live help with every purchase</p>
              </div>
            </div>
          </div>

          <div className='relative' data-aos='fade-left' data-aos-duration='1200'>
            <div className='absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl' />
            <div className='relative'>
              <img src={currentSlide.image} alt={currentSlide.alt} className='relative mx-auto h-105 w-full max-w-105 rounded-4xl object-cover shadow-2xl shadow-slate-950/30 animate-float transition-all duration-1000 ease-out' />
              <div className='mt-6 flex flex-wrap justify-center gap-3'>
                <button onClick={prevSlide} className='rounded-full border border-white/20 bg-slate-950/10 px-4 py-2 text-sm text-white transition hover:bg-white/10'>Prev</button>
                <div className='flex items-center gap-2'>
                  {slides.map((slide, index) => (
                    <button
                      key={slide.alt}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-3 w-3 rounded-full transition ${currentIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button onClick={nextSlide} className='rounded-full border border-white/20 bg-slate-950/10 px-4 py-2 text-sm text-white transition hover:bg-white/10'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero