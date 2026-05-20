import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Category from '../components/Category'
import { categories } from '../data/products'

const Home = ({ theme }) => {
  const sectionBg = theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'
  const cardBg = theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'

  return (
    <main className='overflow-hidden'>
      <Hero theme={theme} />

      <section className={`${sectionBg} py-16`}>
        <div className='container mx-auto px-4 md:px-8 lg:px-16'>
          <div className='text-center mb-10' data-aos='fade-up'>
            <p className='text-sm uppercase tracking-[0.35em] text-cyan-300'>Explore Categories</p>
            <h2 className='mt-4 text-4xl font-extrabold'>Shop by category</h2>
            <p className='mt-4 max-w-2xl mx-auto text-slate-500'>Browse our curated selections and jump into the perfect category for your next upgrade.</p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {categories.map((category, index) => (
              <Link
                to='/shop'
                key={category.id}
                className={`${cardBg} group overflow-hidden rounded-4xl border p-6 transition hover:-translate-y-1 hover:shadow-2xl`}
                data-aos='fade-up'
                data-aos-delay={index * 100}>
                <img src={category.image} alt={category.name} className='h-44 w-full rounded-[1.75rem] object-cover transition duration-500 group-hover:scale-105' />
                <div className='mt-6'>
                  <h3 className='text-2xl font-bold'>{category.name}</h3>
                  <p className='mt-2 text-slate-500'>Premium gear and accessories tailored for every use case.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-950'} py-16`}>
        <div className='container mx-auto px-4 md:px-8 lg:px-16'>
          <div className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center'>
            <div data-aos='fade-right'>
              <span className='text-sm uppercase tracking-[0.35em] text-cyan-300'>Why shop with us</span>
              <h2 className='mt-4 text-4xl font-extrabold'>A full-service tech storefront built for modern buyers.</h2>
              <p className='mt-6 max-w-2xl text-slate-500'>From fast shipping to curated bundles and premium support, TECH-SHELL brings you the best from the world of mobile accessories, audio, wearables, and desktop tech.</p>
              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {[
                  { title: 'Fast delivery', text: 'Same-day order processing and express shipping options for every purchase.' },
                  { title: 'Secure payments', text: 'Multiple payment methods backed by secure checkout and trusted providers.' },
                  { title: 'Curated trends', text: 'Hand-picked inventory selected to match gaming, travel, and lifestyle needs.' },
                  { title: 'Easy returns', text: 'Hassle-free returns and customer-friendly service for every order.' }
                ].map((feature, index) => (
                  <div key={feature.title} className='rounded-3xl border p-6 shadow-sm' data-aos='fade-up' data-aos-delay={200 + index * 100}>
                    <h3 className='text-xl font-semibold'>{feature.title}</h3>
                    <p className='mt-2 text-slate-500'>{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='rounded-4xl border border-slate-200/70 bg-cyan-500/5 p-8 shadow-2xl' data-aos='fade-left'>
              <h3 className='text-3xl font-extrabold'>Featured launch bundle</h3>
              <p className='mt-4 text-slate-500'>Build your next setup with premium accessories, a pro headset, and power delivery that keeps you charged all day.</p>
              <div className='mt-6 space-y-4'>
                <div className='rounded-3xl bg-white/10 p-4'>
                  <h4 className='font-semibold'>Bundle includes</h4>
                  <p className='text-slate-400'>Premium case, fast power bank, wireless headphones, and smart watch.</p>
                </div>
                <div className='rounded-3xl bg-white/10 p-4'>
                  <h4 className='font-semibold'>Limited deal</h4>
                  <p className='text-slate-400'>Save up to 20% when you shop the launch bundle today.</p>
                </div>
              </div>
              <Link to='/shop' className='inline-flex mt-8 items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>Explore the collection</Link>
            </div>
          </div>
        </div>
      </section>

      <Category theme={theme} />
    </main>
  )
}

export default Home