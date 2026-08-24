export const categories = [
  { id: 'tshirts', name: 'T-shirts' },
  { id: 'shirts', name: 'Shirts' },
  { id: 'jeans', name: 'Jeans' },
  { id: 'shorts', name: 'Shorts' },
  { id: 'hoodies', name: 'Hoodies' },
]

export const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein']

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export const products = [
  {
    id: 'p01', name: 'T-shirt with Tape Details', category: 'tshirts',
    price: 120, oldPrice: null, discount: null, rating: 4.5, reviews: 89,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80', 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=80'],
    section: 'new', description: 'A relaxed tee in soft cotton jersey, finished with contrast tape detailing at the shoulder seam.',
  },
  {
    id: 'p02', name: 'Skinny Fit Jeans', category: 'jeans',
    price: 240, oldPrice: 260, discount: 20, rating: 3.5, reviews: 54,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=80'],
    section: 'new', description: 'A close, tapered fit through the leg with just enough stretch for all-day comfort.',
  },
  {
    id: 'p03', name: 'Checkered Shirt', category: 'shirts',
    price: 180, oldPrice: null, discount: null, rating: 4.5, reviews: 67,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=80', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=80'],
    section: 'new', description: 'A boxy checkered shirt in brushed cotton flannel, equally at home open or buttoned up.',
  },
  {
    id: 'p04', name: 'Sleeve Striped T-shirt', category: 'tshirts',
    price: 130, oldPrice: 160, discount: 20, rating: 4.5, reviews: 41,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80'],
    section: 'new', description: 'Contrast striped sleeves on a heavyweight tee, cut with a slightly dropped shoulder.',
  },
  {
    id: 'p05', name: 'Vertical Striped Shirt', category: 'shirts',
    price: 212, oldPrice: 232, discount: 20, rating: 5, reviews: 102,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=80', 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=80'],
    section: 'top', description: 'Fine vertical stripes on lightweight poplin, tailored for a clean, structured silhouette.',
  },
  {
    id: 'p06', name: 'Courage Graphic T-shirt', category: 'tshirts',
    price: 145, oldPrice: null, discount: null, rating: 4, reviews: 38,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=80', 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80'],
    section: 'top', description: 'Oversized fit tee with a front graphic print on heavyweight combed cotton.',
  },
  {
    id: 'p07', name: 'Loose Fit Bermuda Shorts', category: 'shorts',
    price: 80, oldPrice: null, discount: null, rating: 3, reviews: 19,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=1200&q=80', 'https://images.unsplash.com/photo-1591195853866-8b6c7c8f3d6b?w=1200&q=80'],
    section: 'top', description: 'Below-the-knee bermuda shorts with a relaxed drop-crotch fit and side pockets.',
  },
  {
    id: 'p08', name: 'Faded Skinny Jeans', category: 'jeans',
    price: 210, oldPrice: null, discount: null, rating: 4.5, reviews: 76,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=80', 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80'],
    section: 'top', description: 'A washed, faded finish over our classic skinny cut, made from stretch denim.',
  },
  {
    id: 'p09', name: 'One Life Graphic Tee', category: 'tshirts',
    price: 260, oldPrice: 300, discount: 20, rating: 4.5, reviews: 58,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=80'],
    section: 'top', description: 'A statement graphic tee printed on heavyweight cotton, pre-shrunk for a true fit.',
  },
  {
    id: 'p10', name: 'Essential Pullover Hoodie', category: 'hoodies',
    price: 190, oldPrice: null, discount: null, rating: 4.5, reviews: 44,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&q=80'],
    section: 'top', description: 'A midweight fleece pullover with a lined hood and kangaroo pocket.',
  },
]

export const dressStyles = [
  { id: 'casual', name: 'Casual', image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700&q=80' },
  { id: 'formal', name: 'Formal', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&q=80' },
  { id: 'party', name: 'Party', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&q=80' },
  { id: 'gym', name: 'Gym', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=700&q=80' },
]

export const testimonials = [
  { name: 'Sarah M.', text: 'The clothes are exactly like the pictures and fit perfectly. Shipping was fast and the quality feels premium for the price.', rating: 5 },
  { name: 'Alex K.', text: 'Found my new go-to store. The checkered shirt in particular gets compliments every time I wear it.', rating: 5 },
  { name: 'James L.', text: 'Ordering was smooth and sizing guide was spot on, so no surprises when the package arrived.', rating: 5 },
]

export const getProduct = (id) => products.find((p) => p.id === id)
export const getRelated = (product, count = 4) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count)
