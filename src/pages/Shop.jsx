import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { categoryLabels } from '../data/products'

const Shop = ({ theme, products, onAddToCart }) => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = useMemo(() => ['all', ...new Set(products.map((product) => product.category))], [products])

  const displayedProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [products, selectedCategory, search])

  const sectionBg = theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'
  const cardBg = theme === 'dark' ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
  const paragraphText = theme === 'dark' ? 'text-slate-400' : 'text-slate-500'

  const categoryButtonClass = (category) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      selectedCategory === category
        ? 'bg-cyan-400 text-slate-950'
        : theme === 'dark'
        ? 'border border-white/10 bg-slate-900 text-slate-300 hover:bg-slate-800'
        : 'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100'
    }`

  return (
    <section className={`${sectionBg} py-16`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='mb-12 text-center' data-aos='fade-up'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-300'>Shop</p>
          <h2 className='mt-4 text-4xl font-extrabold'>Everything you need for tech and gaming</h2>
          <p className={`mt-4 max-w-2xl mx-auto ${paragraphText}`}>Filter by category, search your favorite gear, and add top picks to your cart.</p>
        </div>

        <div className='mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex flex-wrap gap-3'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={categoryButtonClass(category)}>
                {category === 'all' ? 'All' : categoryLabels[category]}
              </button>
            ))}
          </div>
          <div className='relative max-w-sm'>
            <input
              type='search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search products'
              className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition focus:border-cyan-400 ${
                theme === 'dark'
                  ? 'bg-slate-900 border-white/10 text-white placeholder:text-slate-500'
                  : 'bg-white border-slate-300 text-slate-950 placeholder:text-slate-500'
              }`}
            />
          </div>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {displayedProducts.map((product) => (
            <article key={product.id} className={`${cardBg} rounded-4xl border p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1`} data-aos='fade-up'>
              <img src={product.image} alt={product.name} className='h-64 w-full rounded-[1.75rem] object-cover' />
              <div className='mt-6 flex items-center justify-between gap-4'>
                <div>
                  <h3 className='text-xl font-semibold'>{product.name}</h3>
                  <p className='mt-2 text-sm text-cyan-300'>{categoryLabels[product.category]}</p>
                </div>
                <span className='text-lg font-bold'>{product.priceLabel}</span>
              </div>
              <p className='mt-4 text-sm leading-6 text-slate-500'>{product.description}</p>
              <div className='mt-6 flex flex-wrap items-center gap-3'>
                <Link to={`/product/${product.id}`} className='rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100'>View</Link>
                <button onClick={() => onAddToCart(product.id)} className='rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>Add to cart</button>
              </div>
            </article>
          ))}

          {displayedProducts.length === 0 && (
            <div className='col-span-full rounded-4xl border border-dashed border-slate-400 bg-slate-100 p-10 text-center text-slate-600'>
              No products were found matching your selection.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Shop