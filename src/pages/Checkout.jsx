import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const initial = {
  firstName: '', lastName: '', email: '', phone: '',
  address: '', city: '', postalCode: '', country: '',
  cardName: '', cardNumber: '', expiry: '', cvc: '',
}

function validate(v) {
  const e = {}
  if (!v.firstName.trim()) e.firstName = 'Required'
  if (!v.lastName.trim()) e.lastName = 'Required'
  if (!v.email.trim()) e.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email'
  if (!v.phone.trim()) e.phone = 'Required'
  else if (!/^[\d+\s()-]{7,}$/.test(v.phone)) e.phone = 'Enter a valid phone number'
  if (!v.address.trim()) e.address = 'Required'
  if (!v.city.trim()) e.city = 'Required'
  if (!v.postalCode.trim()) e.postalCode = 'Required'
  if (!v.country.trim()) e.country = 'Required'
  if (!v.cardName.trim()) e.cardName = 'Required'
  if (!/^\d{16}$/.test(v.cardNumber.replace(/\s/g, ''))) e.cardNumber = 'Enter a 16-digit card number'
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(v.expiry)) e.expiry = 'Use MM/YY'
  if (!/^\d{3,4}$/.test(v.cvc)) e.cvc = 'Enter CVC'
  return e
}

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [placed, setPlaced] = useState(false)

  const discount = Math.round(subtotal * 0.1)
  const shipping = 15
  const total = subtotal - discount + shipping

  function update(field, value) { setValues((v) => ({ ...v, [field]: value })) }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length === 0) { clearCart(); setPlaced(true) }
    else document.querySelector('[data-error="true"]')?.focus()
  }

  if (placed) {
    return (
      <div className="container-px py-24 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-ink text-paper flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
        <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-4">Order Confirmed</h1>
        <p className="text-gray mb-8">
          Thanks, {values.firstName}. A confirmation has been sent to {values.email}.
          Your order will ship to {values.address}, {values.city}.
        </p>
        <Link to="/shop" className="inline-flex bg-ink text-paper px-7 py-3.5 rounded-full font-medium hover:opacity-85 transition-opacity">
          Continue Shopping
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container-px py-24 text-center">
        <h1 className="font-display font-extrabold text-3xl mb-4">Your cart is empty</h1>
        <Link to="/shop" className="font-medium border-b border-ink">Browse the shop</Link>
      </div>
    )
  }

  return (
    <div className="container-px py-10 md:py-14">
      <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-10">Checkout</h1>
      <div className="grid lg:grid-cols-[1fr_360px] gap-12">
        <form onSubmit={handleSubmit} noValidate className="space-y-10">
          <fieldset>
            <legend className="font-medium mb-4">Contact</legend>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First name" field="firstName" values={values} errors={errors} update={update} />
              <Field label="Last name" field="lastName" values={values} errors={errors} update={update} />
              <Field label="Email" field="email" type="email" values={values} errors={errors} update={update} />
              <Field label="Phone" field="phone" type="tel" values={values} errors={errors} update={update} />
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-medium mb-4">Shipping address</legend>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Address" field="address" values={values} errors={errors} update={update} full />
              <Field label="City" field="city" values={values} errors={errors} update={update} />
              <Field label="Postal code" field="postalCode" values={values} errors={errors} update={update} />
              <Field label="Country" field="country" values={values} errors={errors} update={update} />
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-medium mb-4">Payment</legend>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name on card" field="cardName" values={values} errors={errors} update={update} full />
              <Field label="Card number" field="cardNumber" values={values} errors={errors} update={update} full placeholder="1234 5678 9012 3456" />
              <Field label="Expiry (MM/YY)" field="expiry" values={values} errors={errors} update={update} placeholder="08/29" />
              <Field label="CVC" field="cvc" values={values} errors={errors} update={update} placeholder="123" />
            </div>
          </fieldset>
          <button type="submit" className="w-full sm:w-auto bg-ink text-paper px-8 py-3.5 rounded-full font-medium hover:opacity-85 transition-opacity">
            Place Order &mdash; ${total}
          </button>
        </form>

        <div className="border border-black/10 rounded-2xl p-6 h-fit">
          <h2 className="font-display font-extrabold text-xl mb-5">Order Summary</h2>
          <ul className="space-y-4 mb-5">
            {items.map((item) => (
              <li key={item.key} className="flex gap-3">
                <div className="w-14 h-14 rounded-md overflow-hidden bg-mist shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray">Size {item.size} &middot; Qty {item.qty}</p>
                </div>
                <p className="text-sm">${item.price * item.qty}</p>
              </li>
            ))}
          </ul>
          <div className="border-t border-black/10 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray">Subtotal</span><span>${subtotal}</span></div>
            <div className="flex justify-between text-sale"><span>Discount</span><span>-${discount}</span></div>
            <div className="flex justify-between"><span className="text-gray">Delivery</span><span>${shipping}</span></div>
            <div className="flex justify-between font-medium pt-2 border-t border-black/10">
              <span>Total</span><span className="font-display font-extrabold text-lg">${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, field, type = 'text', values, errors, update, full, placeholder }) {
  const hasError = !!errors[field]
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={field} className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        id={field} type={type} value={values[field]} placeholder={placeholder}
        onChange={(e) => update(field, e.target.value)}
        aria-invalid={hasError} data-error={hasError}
        aria-describedby={hasError ? `${field}-error` : undefined}
        className={`w-full px-4 py-2.5 rounded-lg border bg-paper text-sm focus:outline-none ${hasError ? 'border-sale' : 'border-black/15'}`}
      />
      {hasError && <p id={`${field}-error`} className="text-sale text-xs mt-1.5">{errors[field]}</p>}
    </div>
  )
}
