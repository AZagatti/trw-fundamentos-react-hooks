import { useReducer } from 'react'

const products = [
  { id: 0, name: 'Apple' },
  { id: 1, name: 'Banana' },
  { id: 2, name: 'Melon' },
]
type Product = (typeof products)[number]
type ProductCart = Product & { amount: number }
interface CartAction {
  type: 'add' | 'remove' | 'decrement' | 'increment'
  product: Product
}
type ActionReducer = (state: ProductCart[], product: Product) => ProductCart[]
const reducerActions: Record<CartAction['type'], ActionReducer> = {
  add: (state, product) => {
    const hasProduct = state.some(p => p.id === product.id)
    if (hasProduct) {
      return reducerActions.increment(state, product)
    }
    return [...state, { ...product, amount: 1 }]
  },
  remove: (state, product) => state.filter((p) => p.id !== product.id),
  increment: (state, product) =>
    state.map((p) =>
      p.id === product.id ? { ...p, amount: p.amount + 1 } : p
    ),
  decrement: (state, product) =>
    state.map((p) =>
      p.id === product.id ? { ...p, amount: p.amount - 1 } : p
    ),
}

const reducer = (state: ProductCart[], action: CartAction) => {
  // switch (action.type) {
  //   case 'add':
  //     return [...state, { ...action.product, amount: 1 }]
  //   case 'remove':
  //     return state.filter((p) => p.id !== action.product.id)
  //   case 'increment':
  //     return state.map((p) =>
  //       p.id === action.product.id ? { ...p, amount: p.amount + 1 } : p
  //     )
  //   case 'decrement':
  //     return state.map((p) =>
  //       p.id === action.product.id ? { ...p, amount: p.amount - 1 } : p
  //     )
  // }
  const reducerAction = reducerActions[action.type]
  return reducerAction(state, action.product)
}

function App() {
  const [cart, dispatch] = useReducer(reducer, [])

  const handleAddProduct = (product: Product) => {
    dispatch({ type: 'add', product })
  }

  const handleRemoveProduct = (product: Product) => {
    dispatch({ type: 'remove', product })
  }

  const handleIncrementProduct = (product: Product) => {
    dispatch({ type: 'increment', product })
  }

  const handleDecrementProduct = (product: Product) => {
    dispatch({ type: 'decrement', product })
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => handleAddProduct(product)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div>
              <button onClick={() => handleIncrementProduct(product)}>+</button>
              <span>{`${product.name} - x${product.amount}`}</span>
              <button onClick={() => handleDecrementProduct(product)}>-</button>
            </div>
            <button onClick={() => handleRemoveProduct(product)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
