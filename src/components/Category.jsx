import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/images'

const Category = ({ theme }) => {
  const [activeTab, setActiveTab] = useState('pcase')

  const tabs = [
    { id: 'pcase', name: 'Phone Cases', image: images.pcase },
    { id: 'pbank', name: 'Power Banks', image: images.pbank },
    { id: 'hphone', name: 'Headphones', image: images.hphone },
    { id: 'swatch', name: 'Smart Watches', image: images.swatch },
    { id: 'speaker', name: 'Speakers', image: images.speaker },
    { id: 'monitor', name: 'Monitors', image: images.monitor }
  ]

  const products = {
    pcase: [
      { id: 1, name: 'Aura Armor Case', price: '$4.99', image: images.pcase1 },
      { id: 2, name: 'Clear MagSafe Shield', price: '$5.99', image: images.pcase2 },
      { id: 3, name: 'Silicone Grip Case', price: '$6.99', image: images.pcase3 },
      { id: 4, name: 'Pixel Matte Defender', price: '$7.99', image: images.pcase4 }
    ],
    pbank: [
      { id: 1, name: '30,000mAh Ultra Pack', price: '$15.99', image: images.pbank1 },
      { id: 2, name: '20,000mAh Slim Charge', price: '$13.99', image: images.pbank2 },
      { id: 3, name: '10,000mAh Pocket Power', price: '$11.99', image: images.pbank3 },
      { id: 4, name: '5,000mAh USB-C Mini', price: '$8.99', image: images.pbank4 }
    ],
    hphone: [
      { id: 1, name: 'NoiseSeal Wireless', price: '$29.99', image: images.hphone1 },
      { id: 2, name: 'Pulse Bass Studio', price: '$34.99', image: images.hphone2 },
      { id: 3, name: 'AirWave Sport', price: '$27.99', image: images.hphone3 },
      { id: 4, name: 'Echo Comfort Pro', price: '$31.99', image: images.hphone4 }
    ],
    swatch: [
      { id: 1, name: 'Orbit Smart Watch', price: '$49.99', image: images.swatch1 },
      { id: 2, name: 'Pulse Track Elite', price: '$59.99', image: images.swatch2 },
      { id: 3, name: 'Neon Sport Watch', price: '$42.99', image: images.swatch3 },
      { id: 4, name: 'Luna Fitness Band', price: '$39.99', image: images.swatch4 }
    ],
    speaker: [
      { id: 1, name: 'BoomX Portable', price: '$22.99', image: images.speaker1 },
      { id: 2, name: 'Crescendo Mini', price: '$19.99', image: images.speaker2 },
      { id: 3, name: 'WaveSound', price: '$24.99', image: images.speaker3 },
      { id: 4, name: 'Bass Pulse', price: '$29.99', image: images.speaker4 }
    ],
    monitor: [
      { id: 1, name: 'Vivid 24" Gaming', price: '$149.99', image: images.monitor2 },
      { id: 2, name: 'Crystal 27" Pro', price: '$189.99', image: images.monitor3 },
      { id: 3, name: 'Edge 32" Ultra', price: '$229.99', image: images.monitor4 },
      { id: 4, name: 'Studio 21" Focus', price: '$139.99', image: images.monitor }
    ]
  }

  const currentProducts = products[activeTab] || products.pcase
  const activeTabData = tabs.find((tab) => tab.id === activeTab)
  const sectionClass = theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'
  const cardClass = theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'

  return (
    <section id='shop' className={`${sectionClass} py-16`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='text-center mb-10' data-aos='fade-up'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-300'>Featured Collections</p>
          <h2 className='mt-4 text-4xl font-extrabold'>Shop the Latest Tech Gear</h2>
          <p className='mt-4 max-w-2xl mx-auto text-slate-400'>Discover high-performance accessories, audio, smart wearables, and desktop essentials crafted for modern players and creators.</p>
        </div>

        <div className='grid gap-6 lg:grid-cols-[1.3fr_1fr]'>
          <div className='grid gap-4'>
            <div className='flex flex-wrap gap-3 justify-center lg:justify-start' data-aos='fade-up' data-aos-delay='100'>
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    activeTab === tab.id
                      ? 'border-cyan-300 bg-cyan-400/10 text-cyan-300'
                      : 'border-slate-400 text-slate-600 hover:border-cyan-300 hover:text-slate-900'
                  }`}
                  data-aos='zoom-in'
                  data-aos-delay={150 + index * 60}>
                  {tab.name}
                </button>
              ))}
            </div>

            <div className={`relative overflow-hidden rounded-4xl border p-6 shadow-2xl ${cardClass}`} data-aos='fade-up' data-aos-delay='200'>
              <div className='flex flex-col lg:flex-row gap-6 items-center'>
                <img src={activeTabData?.image} alt={activeTabData?.name} className='w-full max-w-sm rounded-3xl object-cover shadow-lg border border-slate-200/10' />
                <div className='space-y-4'>
                  <span className='text-sm uppercase tracking-[0.35em] text-cyan-300'>Now Trending</span>
                  <h3 className='text-3xl font-extrabold'>{activeTabData?.name}</h3>
                  <p className='text-slate-500'>Browse the top picks from the collection and pick the gear built for speed, protection, power and style.</p>
                  <div className='flex flex-wrap gap-3'>
                    <span className='rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300'>Fast shipping</span>
                    <span className='rounded-full bg-slate-200/10 px-4 py-2 text-sm text-slate-500'>Free support</span>
                    <span className='rounded-full bg-slate-200/10 px-4 py-2 text-sm text-slate-500'>Best seller</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`rounded-4xl border p-6 shadow-xl ${cardClass}`} data-aos='fade-up' data-aos-delay='300'>
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <p className='text-sm uppercase tracking-[0.35em] text-slate-400'>Curated Picks</p>
                <h3 className='text-2xl font-bold'>Top {activeTabData?.name}</h3>
              </div>
              <span className='rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-300'>Updated daily</span>
            </div>
            <div className='grid gap-4'>
              {currentProducts.map((product, index) => (
                <div key={product.id} className={`flex items-center gap-4 rounded-3xl border p-4 ${theme === 'dark' ? 'border-white/10 bg-slate-950/80' : 'border-slate-200 bg-slate-50'}`} data-aos='fade-up' data-aos-delay={180 + index * 80}>
                  <img src={product.image} alt={product.name} className='h-24 w-24 rounded-3xl object-cover' />
                  <div className='flex-1'>
                    <h4 className='font-semibold'>{product.name}</h4>
                    <p className='mt-2 text-sm text-slate-500'>{product.price}</p>
                  </div>
                  <Link to={`/product/${activeTab}-${product.id}`} className='rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>View</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category;