import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ theme }) => {
  const sectionBg = theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-950'
  const textClass = theme === 'dark' ? 'text-slate-400' : 'text-slate-600'

  return (
    <footer className={`${sectionBg} border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} py-16`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]'>
          <div>
            <Link to='/' className='text-2xl font-black'>TECH-SHELL</Link>
            <p className='mt-5 max-w-sm text-sm text-slate-500'>Your destination for premium tech accessories, audio gear, and smart lifestyle essentials.</p>
          </div>

          <div>
            <h3 className='mb-4 text-sm uppercase tracking-[0.35em] text-slate-500'>Shop</h3>
            <ul className='space-y-3 text-sm'>
              <li><Link to='/shop' className={textClass}>All products</Link></li>
              <li><Link to='/shop' className={textClass}>Collections</Link></li>
              <li><Link to='/cart' className={textClass}>Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-sm uppercase tracking-[0.35em] text-slate-500'>Company</h3>
            <ul className='space-y-3 text-sm'>
              <li><Link to='/about' className={textClass}>About</Link></li>
              <li><a href='mailto:support@tech-shell.com' className={textClass}>Contact</a></li>
              <li><Link to='/shop' className={textClass}>Shipping</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-sm uppercase tracking-[0.35em] text-slate-500'>Stay updated</h3>
            <p className='text-sm text-slate-500'>Get the latest offers and product drops sent to your inbox.</p>
            <form className='mt-4 flex flex-col gap-3'>
              <input type='email' placeholder='Email address' className='w-full rounded-full border border-slate-300 bg-transparent px-5 py-3 text-sm outline-none' />
              <button type='submit' className='rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>Subscribe</button>
            </form>
          </div>
        </div>

        <div className='mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500'>
          <p>&copy; {new Date().getFullYear()} TECH-SHELL. Built for fast shopping and modern tech buyers.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer