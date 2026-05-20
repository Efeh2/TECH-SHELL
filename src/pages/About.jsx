import React from 'react'

const About = ({ theme }) => {
  const sectionBg = theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'
  const cardBg = theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'

  return (
    <section className={`${sectionBg} py-16`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='grid gap-12 lg:grid-cols-[1fr_0.9fr] items-center'>
          <div>
            <span className='text-sm uppercase tracking-[0.35em] text-cyan-300'>About us</span>
            <h1 className='mt-4 text-4xl font-extrabold'>Built for tech fans who want premium gear without the markup.</h1>
            <p className='mt-6 max-w-xl text-slate-500'>TECH-SHELL blends design, value, and quality support to bring you the latest accessories, audio, and smart tech in one easy shopping destination.</p>
            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
              <div className={`${cardBg} rounded-4xl p-6`}>
                <h2 className='text-xl font-semibold'>Trusted suppliers</h2>
                <p className='mt-3 text-slate-500'>We partner with reputable brands and fulfillment partners to keep shipping fast and quality reliable.</p>
              </div>
              <div className={`${cardBg} rounded-4xl p-6`}>
                <h2 className='text-xl font-semibold'>Smart support</h2>
                <p className='mt-3 text-slate-500'>Our team is available to help with product questions and order support across every step.</p>
              </div>
            </div>
          </div>

          <div className={`${cardBg} rounded-4xl p-10 shadow-xl shadow-slate-900/10`}>
            <h2 className='text-3xl font-bold'>Mission</h2>
            <p className='mt-4 text-slate-500'>We make shopping for quality tech accessories feel modern, effortless, and dependable. Every item is selected to deliver performance, durability, and everyday value.</p>
            <ul className='mt-6 space-y-4 text-slate-500'>
              <li>Fast delivery and order tracking</li>
              <li>Easy returns within 30 days</li>
              <li>Premium customer service on every purchase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About