import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=tshirts', label: 'On Sale' },
  { to: '/shop?category=jeans', label: 'New Arrivals' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="bg-paper border-b border-black/10">
      <div className="container-px flex items-center justify-between h-16 md:h-20 gap-4">
        <button
          className="lg:hidden inline-flex items-center justify-center w-9 h-9"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>

        <Link to="/" className="font-display font-extrabold text-2xl tracking-tight" onClick={() => setOpen(false)}>
          SHOP.CO
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} className="hover:opacity-60 transition-opacity">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full bg-mist rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" aria-label={`Cart, ${count} items`} className="relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-ink text-paper text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden container-px pb-5 flex flex-col gap-1 border-t border-black/10 pt-3">
          <div className="relative w-full mb-2">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
            </svg>
            <input type="search" placeholder="Search for products..." className="w-full bg-mist rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none" />
          </div>
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} onClick={() => setOpen(false)} className="py-3 border-b border-black/10 last:border-0 font-medium">
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
