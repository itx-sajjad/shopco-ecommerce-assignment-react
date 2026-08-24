import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProduct, getRelated, sizes } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import StarRating from '../components/StarRating'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProduct(id)
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('M')
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const [sizeError, setSizeError] = useState('')

  if (!product) {
    return (
      <div className="container-px py-24 text-center">
        <h1 className="font-display font-extrabold text-3xl mb-4">Product not found</h1>
        <Link to="/shop" className="font-medium border-b border-ink">Back to shop</Link>
      </div>
    )
  }

  const related = getRelated(product)

  function handleAdd(goToCheckout) {
    if (!size) { setSizeError('Select a size first.'); return }
    setSizeError('')
    addItem(product, qty, size)
    if (goToCheckout) { navigate('/checkout'); return }
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="container-px py-10 md:py-14">
      <nav className="text-sm text-gray mb-8 flex gap-2 flex-wrap">
        <Link to="/" className="hover:text-ink">Home</Link><span>/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link><span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="rounded-xl overflow-hidden bg-mist aspect-square">
            <img src={product.gallery[activeImg]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {product.gallery.length > 1 && (
            <div className="flex gap-3 mt-3">
              {product.gallery.map((img, i) => (
                <button key={img} onClick={() => setActiveImg(i)} aria-label={`View image ${i + 1}`} className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${activeImg === i ? 'border-ink' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 text-sm text-gray mb-4">
            <StarRating rating={product.rating} />
            <span>{product.rating}/5 ({product.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display font-extrabold text-2xl">${product.price}</span>
            {product.oldPrice && <span className="text-gray line-through text-lg">${product.oldPrice}</span>}
            {product.discount && <span className="bg-sale/10 text-sale text-xs font-semibold px-2.5 py-1 rounded-full">-{product.discount}%</span>}
          </div>
          <p className="text-gray leading-relaxed mb-6 pb-6 border-b border-black/10">{product.description}</p>

          <div className="mb-6">
            <p className="font-medium mb-3">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => { setSize(s); setSizeError('') }}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${size === s ? 'bg-ink text-paper border-ink' : 'border-black/15 hover:border-ink'}`}
                >
                  {s}
                </button>
              ))}
            </div>
            {sizeError && <p className="text-sale text-xs mt-2">{sizeError}</p>}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-black/15 rounded-full">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-9 flex items-center justify-center text-lg" aria-label="Decrease quantity">&minus;</button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} className="w-9 h-9 flex items-center justify-center text-lg" aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => handleAdd(false)} className="flex-1 bg-ink text-paper px-6 py-3.5 rounded-full font-medium hover:opacity-85 transition-opacity">
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <button onClick={() => handleAdd(true)} className="flex-1 border border-ink px-6 py-3.5 rounded-full font-medium hover:bg-mist transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-8">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}
