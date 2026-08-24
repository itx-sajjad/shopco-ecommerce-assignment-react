import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, qty, size } = action
      const key = `${product.id}-${size}`
      const existing = state.items.find((i) => i.key === key)
      if (existing) {
        return { items: state.items.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i)) }
      }
      return { items: [...state.items, { ...product, qty, size, key }] }
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.key !== action.key) }
    case 'SET_QTY':
      return { items: state.items.map((i) => (i.key === action.key ? { ...i, qty: Math.max(1, action.qty) } : i)) }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })

  const value = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.price, 0)
    return {
      items: state.items,
      count,
      subtotal,
      addItem: (product, qty = 1, size = 'M') => dispatch({ type: 'ADD', product, qty, size }),
      removeItem: (key) => dispatch({ type: 'REMOVE', key }),
      setQty: (key, qty) => dispatch({ type: 'SET_QTY', key, qty }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
