import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ theme, cartItems, getProduct, onQuantityChange, onRemove }) => {
  const items = cartItems
    .map((item) => ({ ...item, product: getProduct(item.productId) }))
    .filter((item) => item.product)

  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const shipping = items.length > 0 ? 9.99 : 0
  const total = subtotal + shipping

  return (
    <section className={`${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-950'} py-16`}>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='mb-10 text-center' data-aos='fade-up'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-300'>Cart</p>
          <h2 className='mt-4 text-4xl font-extrabold'>Review your order</h2>
          <p className='mt-4 max-w-2xl mx-auto text-slate-500'>Adjust quantities or remove items before checkout.</p>
        </div>

        {items.length === 0 ? (
          <div className='rounded-4xl border border-dashed border-slate-400 bg-white/70 p-16 text-center shadow-lg'>
            <h3 className='text-2xl font-semibold'>Your cart is empty</h3>
            <p className='mt-4 text-slate-500'>Add items from the shop to start building your order.</p>
            <Link to='/shop' className='mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>Continue shopping</Link>
          </div>
        ) : (
          <div className='grid gap-8 xl:grid-cols-[2fr_1fr]'>
            <div className='space-y-6'>
              {items.map((item) => (
                <div key={item.productId} className='rounded-4xl border p-6 shadow-xl shadow-slate-900/5'>
                  <div className='flex flex-col gap-4 lg:flex-row lg:items-center'>
                    <img src={item.product.image} alt={item.product.name} className='h-32 w-32 rounded-[1.75rem] object-cover' />
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold'>{item.product.name}</h3>
                      <p className='mt-2 text-slate-500'>{item.product.priceLabel}</p>
                      <div className='mt-4 flex flex-wrap items-center gap-3'>
                        <button onClick={() => onQuantityChange(item.productId, item.quantity - 1)} className='rounded-full border px-3 py-2 text-sm'>-</button>
                        <span className='text-sm font-semibold'>{item.quantity}</span>
                        <button onClick={() => onQuantityChange(item.productId, item.quantity + 1)} className='rounded-full border px-3 py-2 text-sm'>+</button>
                      </div>
                    </div>
                    <div className='flex flex-col items-start gap-3'>
                      <span className='font-semibold'>{item.product.priceLabel}</span>
                      <button onClick={() => onRemove(item.productId)} className='text-sm text-cyan-400 transition hover:text-cyan-300'>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className='rounded-4xl border p-6 shadow-xl shadow-slate-900/5'>
              <h3 className='text-2xl font-bold'>Order summary</h3>
              <div className='mt-6 space-y-4'>
                <div className='flex items-center justify-between text-slate-500'>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex items-center justify-between text-slate-500'>
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className='border-t pt-4 text-lg font-semibold'>
                  <div className='flex items-center justify-between'>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className='mt-8 w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'>Proceed to checkout</button>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart