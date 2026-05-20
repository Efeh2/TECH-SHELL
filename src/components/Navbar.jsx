import { Menu, Search, ShoppingBag, X, Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

const Navbar = ({ theme, toggleTheme, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Cart', to: '/cart' }
  ]

  const textClass = theme === 'dark' ? 'text-white' : 'text-slate-950'
  const secondaryText = theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
  const borderClass = theme === 'dark' ? 'border-white/15' : 'border-slate-200'

  return (
    <div className={`relative z-50 ${theme === 'dark' ? '' : 'bg-white/90 shadow-sm'}`} data-aos='fade-down'>
      <div className={`container mx-auto px-4 md:px-8 lg:px-16 py-5 ${theme === 'dark' ? '' : ''}`}>
        <div className='flex items-center justify-between gap-4'>
          <NavLink to='/' className={`font-black tracking-tight text-2xl ${textClass}`}>
            TECH-SHELL
            <span className='text-sm align-top ml-1'>STORE</span>
          </NavLink>

          <div className='hidden md:flex items-center justify-center flex-1'>
            <div className={`flex gap-8 lg:gap-12 ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative font-medium transition-opacity hover:opacity-70 ${isActive ? 'opacity-100 text-cyan-300' : `opacity-80 ${secondaryText}`}`
                  }>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <button onClick={toggleTheme} className='rounded-full border p-2 transition hover:border-cyan-400'>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className='rounded-full border p-2 transition hover:border-cyan-400'>
              <Search size={20} className={secondaryText} />
            </button>
            <NavLink to='/cart' className='relative rounded-full border p-2 transition hover:border-cyan-400'>
              <ShoppingBag size={20} className={secondaryText} />
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1.5 text-[10px] font-bold text-slate-950'>
                  {cartCount}
                </span>
              )}
            </NavLink>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden rounded-full border p-2 transition hover:border-cyan-400'>
              {isMenuOpen ? <X size={24} className={secondaryText} /> : <Menu size={24} className={secondaryText} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden mt-4 rounded-3xl border ${borderClass} bg-opacity-90 p-5 shadow-lg ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
            <div className='flex flex-col gap-3'>
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 transition ${isActive ? 'bg-cyan-500/10 text-cyan-300' : secondaryText} hover:bg-cyan-500/10`
                  }>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar