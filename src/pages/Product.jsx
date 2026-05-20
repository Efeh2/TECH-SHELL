import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = ({ theme, getProduct, onAddToCart }) => {
  const { productId } = useParams()
  const product = getProduct(productId)
  const navigate = useNavigate()
  const textSecondary = theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
  const buttonBg = theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10 border-white/20' : 'bg-slate-950 text-white hover:bg-slate-800 border-slate-900/20'
  const goBack = () => navigate(-1)

  if (!product) {
    return (
      <section className={`min-h-screen py-24 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'}`}>
        <div className='container mx-auto px-4 md:px-8 lg:px-16 text-center'>
          <h2 className='text-3xl font-bold'>Product not found</h2>
          <p className='mt-4 text-slate-500'>The item you are looking for is unavailable or may have been removed.</p>
          <button onClick={() => navigate('/shop')} className='mt-8 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950'>Browse products</button>
        </div>
      </section>
    )
  }

  return (
    <section className={`${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'} py-16`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='mb-6'>
          <button onClick={goBack} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${buttonBg}`}>
            Go back
          </button>
        </div>
        <div className='grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center'>
          <div className={`rounded-4xl p-6 shadow-2xl shadow-slate-900/10 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
            <img src={product.image} alt={product.name} className='w-full rounded-4xl object-cover' />
          </div>

          <div className='space-y-6'>
            <div className={`rounded-4xl border p-6 shadow-xl ${theme === 'dark' ? 'border-white/10 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <p className='text-sm uppercase tracking-[0.35em] text-cyan-300'>Product details</p>
              <h1 className='mt-4 text-4xl font-black'>{product.name}</h1>
              <p className='mt-4 text-2xl font-semibold text-cyan-300'>{product.priceLabel}</p>
              <p className={`mt-4 ${textSecondary}`}>{product.description}</p>
              <div className='mt-6 space-y-3'>
                {product.features.map((feature) => (
                  <div key={feature} className='flex items-center gap-3'>
                    <span className='inline-flex h-3 w-3 rounded-full bg-cyan-400' />
                    <p className={`text-sm ${textSecondary}`}>{feature}</p>
                  </div>
                ))}
              </div>
              <div className='mt-8 flex flex-wrap gap-4'>
                <button onClick={() => onAddToCart(product.id)} className='rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>Add to cart</button>
                <button onClick={() => navigate('/shop')} className='rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400'>Continue shopping</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product