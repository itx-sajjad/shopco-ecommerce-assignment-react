import { Link } from 'react-router-dom'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-mist aspect-square">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.discount && (
          <span className="absolute top-3 right-3 bg-sale text-paper text-[11px] font-semibold px-2.5 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
      </div>
      <p className="font-medium mt-3 text-sm sm:text-base leading-snug">{product.name}</p>
      <div className="flex items-center gap-1.5 mt-1">
        <StarRating rating={product.rating} />
        <span className="text-xs text-gray">{product.rating}/5</span>
      </div>
      <div className="flex items-center gap-2 mt-1.5">
        <span className="font-display font-extrabold text-lg">${product.price}</span>
        {product.oldPrice && (
          <span className="text-gray line-through text-sm">${product.oldPrice}</span>
        )}
      </div>
    </Link>
  )
}
