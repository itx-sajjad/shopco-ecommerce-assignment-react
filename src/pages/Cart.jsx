import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, subtotal, setQty, removeItem } = useCart()
  const navigate = useNavigate()
  const discount = Math.round(subtotal * 0.1)
  const shipping = items.length === 0 ? 0 : 15
  const total = subtotal - discount + shipping

  if (items.length === 0) {
    return (
      <div className="container-px py-24 text-center">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-6">Your cart is empty</h1>
        <p className="text-gray mb-8">Nothing here yet. Let&rsquo;s find something you&rsquo;ll love.</p>
        <Link to="/shop" className="inline-flex bg-ink text-paper px-7 py-3.5 rounded-full font-medium hover:opacity-85 transition-opacity">
          Browse the shop
        </Link>
      </div>
    )
  }

  return (
    <div className="container-px py-10 md:py-14">
      <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-10">YOUR CART</h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-12">
        <ul className="divide-y divide-black/10">
          {items.map((item) => (
            <li key={item.key} className="py-6 flex gap-4 sm:gap-6">
              <Link to={`/product/${item.id}`} className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-mist">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <Link to={`/product/${item.id}`} className="font-medium hover:opacity-70">{item.name}</Link>
                  <p className="text-sm text-gray mt-1">Size: {item.size}</p>
                  <button onClick={() => removeItem(item.key)} className="text-xs text-sale mt-2 underline underline-offset-2">
                    Remove
                  </button>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-black/15 rounded-full">
                    <button onClick={() => setQty(item.key, item.qty - 1)} className="w-8 h-8 flex items-center justify-center" aria-label={`Decrease quantity of ${item.name}`}>&minus;</button>
                    <span className="w-7 text-center text-sm">{item.qty}</span>
                    <button onClick={() => setQty(item.key, item.qty + 1)} className="w-8 h-8 flex items-center justify-center" aria-label={`Increase quantity of ${item.name}`}>+</button>
                  </div>
                  <p className="font-display font-extrabold text-lg w-16 text-right">${item.price * item.qty}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="border border-black/10 rounded-2xl p-6 h-fit sticky top-24">
          <h2 className="font-display font-extrabold text-xl mb-5">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-gray">Subtotal</span><span>${subtotal}</span></div>
            <div className="flex justify-between text-sale"><span>Discount (-10%)</span><span>-${discount}</span></div>
            <div className="flex justify-between"><span className="text-gray">Delivery Fee</span><span>${shipping}</span></div>
          </div>
          <div className="border-t border-black/10 mt-4 pt-4 flex justify-between font-medium">
            <span>Total</span><span className="font-display font-extrabold text-xl">${total}</span>
          </div>
          <button onClick={() => navigate('/checkout')} className="w-full mt-6 bg-ink text-paper py-3.5 rounded-full font-medium hover:opacity-85 transition-opacity">
            Go to Checkout
          </button>
          <Link to="/shop" className="block text-center text-sm mt-4 text-gray hover:text-ink">Continue shopping</Link>
        </div>
      </div>
    </div>
  )
}
