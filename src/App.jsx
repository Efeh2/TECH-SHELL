import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'
import { products } from './data/products'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
      offset: 100,
    })
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const addToCart = (productId, quantity = 1) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.productId === productId)
      if (existing) {
        return items.map((item) => item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
        )
      }
      return [...items, { productId, quantity }]
    })
  }

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCartItems((items) => items.filter((item) => item.productId !== productId))
      return
    }
    setCartItems((items) => items.map((item) => item.productId === productId ? { ...item, quantity } : item))
  }

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.productId !== productId))
  }

  const getProduct = (productId) => products.find((product) => product.id === productId)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'} min-h-screen`}> 
      <div className='min-h-screen'>
        <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cartCount} />
        <Routes>
          <Route path='/' element={<Home theme={theme} />} />
          <Route path='/shop' element={<Shop theme={theme} products={products} onAddToCart={addToCart} />} />
          <Route path='/product/:productId' element={<Product theme={theme} getProduct={getProduct} onAddToCart={addToCart} />} />
          <Route path='/cart' element={<Cart theme={theme} cartItems={cartItems} getProduct={getProduct} onQuantityChange={updateCartQuantity} onRemove={removeFromCart} />} />
          <Route path='/about' element={<About theme={theme} />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </div>
  )
}

export default App