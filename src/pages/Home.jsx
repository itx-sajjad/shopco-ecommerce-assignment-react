import { Link } from 'react-router-dom'
import { products, brands, dressStyles, testimonials } from '../data/products'
import ProductCard from '../components/ProductCard'
import StarRating from '../components/StarRating'

export default function Home() {
  const newArrivals = products.filter((p) => p.section === 'new').slice(0, 4)
  const topSelling = products.filter((p) => p.section === 'top').slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section className="bg-mist">
        <div className="container-px pt-10 md:pt-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[3.5rem] leading-[1.05] mb-5">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray max-w-md mb-7 leading-relaxed">
              Browse through our diverse range of meticulously crafted garments, designed
              to bring out your individuality and cater to your sense of style.
            </p>
            <Link to="/shop" className="inline-flex bg-ink text-paper px-10 py-4 rounded-full font-medium hover:opacity-85 transition-opacity">
              Shop Now
            </Link>
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10 pt-8 border-t border-black/10">
              <Stat value="200+" label="International Brands" />
              <Stat value="2,000+" label="High-Quality Products" />
              <Stat value="30,000+" label="Happy Customers" />
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1000&q=80"
              alt="Two models wearing SHOP.CO outfits"
              className="w-full h-full object-cover rounded-b-none lg:aspect-[5/4]"
            />
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="bg-ink overflow-hidden">
        <div className="container-px py-6 flex gap-12 overflow-x-auto no-scrollbar">
          {brands.map((b) => (
            <span key={b} className="font-display font-extrabold text-paper text-lg sm:text-2xl whitespace-nowrap shrink-0">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container-px mt-16 md:mt-20">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-center mb-10">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="inline-flex border border-black/15 px-10 py-3 rounded-full font-medium hover:border-ink transition-colors">
            View All
          </Link>
        </div>
      </section>

      <div className="container-px"><hr className="border-black/10 mt-16 md:mt-20" /></div>

      {/* Top Selling */}
      <section className="container-px mt-16 md:mt-20">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-center mb-10">TOP SELLING</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {topSelling.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="inline-flex border border-black/15 px-10 py-3 rounded-full font-medium hover:border-ink transition-colors">
            View All
          </Link>
        </div>
      </section>

      {/* Browse by Dress Style */}
      <section className="mt-16 md:mt-20">
        <div className="bg-mist">
          <div className="container-px py-10 md:py-14">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-center mb-8">BROWSE BY DRESS STYLE</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {dressStyles.map((s, i) => (
                <Link
                  key={s.id}
                  to={`/shop?category=${s.id === 'casual' || s.id === 'formal' ? 'shirts' : 'tshirts'}`}
                  className={`relative rounded-2xl overflow-hidden group ${i === 1 || i === 2 ? 'sm:aspect-[4/3]' : 'aspect-[4/3] sm:aspect-[3/2]'}`}
                >
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 font-display font-extrabold text-paper text-xl">{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px mt-16 md:mt-20 mb-4">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-8">OUR HAPPY CUSTOMERS</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-black/10 rounded-2xl p-6">
              <StarRating rating={t.rating} />
              <p className="font-medium mt-3 mb-1">{t.name}</p>
              <p className="text-gray text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display font-extrabold text-2xl sm:text-3xl">{value}</p>
      <p className="text-gray text-sm mt-0.5">{label}</p>
    </div>
  )
}
