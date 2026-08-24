export default function StarRating({ rating, size = 14 }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={i < full || (i === full && half) ? '#FFC633' : '#E5E1DA'}>
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </span>
  )
}
