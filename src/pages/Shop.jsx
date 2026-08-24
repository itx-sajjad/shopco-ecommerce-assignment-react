import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const activeCategory = params.get('category') || 'all'
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  function setCategory(id) {
    if (id === 'all') params.delete('category')
    else params.set('category', id)
    setParams(params, { replace: true })
  }

  const list = useMemo(() => {
    let items = products.filter((p) => activeCategory === 'all' || p.category === activeCategory)
    if (sort === 'price-asc') items = [...items].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') items = [...items].sort((a, b) => b.price - a.price)
    if (sort === 'rating') items = [...items].sort((a, b) => b.rating - a.rating)
    return items
  }, [activeCategory, sort])

  return (
    <div className="container-px py-10 md:py-14">
      <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-8">All Products</h1>

      <div className="flex justify-between items-center mb-6 lg:hidden">
        <button onClick={() => setMobileFiltersOpen((o) => !o)} className="text-sm font-medium border border-black/15 rounded-full px-4 py-2">
          Filters {activeCategory !== 'all' ? '(1)' : ''}
        </button>
        <SortSelect sort={sort} setSort={setSort} />
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-10">
        <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
          <p className="font-medium mb-3">Category</p>
          <ul className="space-y-1">
            <li>
              <button onClick={() => setCategory('all')} className={`text-sm py-1.5 w-full text-left ${activeCategory === 'all' ? 'font-semibold' : 'text-gray hover:text-ink'}`}>
                All products
              </button>
            </li>
            {categories.map((c) => (
              <li key={c.id}>
                <button onClick={() => setCategory(c.id)} className={`text-sm py-1.5 w-full text-left ${activeCategory === c.id ? 'font-semibold' : 'text-gray hover:text-ink'}`}>
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <div className="hidden lg:flex justify-between items-center mb-6">
            <p className="text-sm text-gray">{list.length} products</p>
            <SortSelect sort={sort} setSort={setSort} />
          </div>

          {list.length === 0 ? (
            <p className="text-gray py-20 text-center">No products in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
              {list.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SortSelect({ sort, setSort }) {
  return (
    <label className="text-sm flex items-center gap-2">
      <span className="sr-only">Sort by</span>
      <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-black/15 rounded-full px-3.5 py-2 bg-paper focus:outline-none">
        {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
      </select>
    </label>
  )
}
