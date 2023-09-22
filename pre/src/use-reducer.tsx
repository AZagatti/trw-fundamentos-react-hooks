
// Estados complexos
// const products = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Banana' },
//   { id: 2, name: 'Melon' },
//   { id: 3, name: 'Watermelon' },
// ]
// type Product = typeof products[number]
// type ProductCart = Product & { amount: number }
// interface CartAction {
//   type: 'add' | 'remove' | 'decrement' | 'increment'
//   product: Product
// }
// const reducerActions = {
//   add: (state: ProductCart[], product: Product) => [...state, { ...product, amount: 1 }],
//   remove: (state: ProductCart[], product: Product) => state.filter(p => p.id !== product.id),
//   increment: (state: ProductCart[], product: Product) => state.map(p => p.id === product.id ? { ...p, amount: p.amount + 1 } : p),
//   decrement: (state: ProductCart[], product: Product) => state.map(p => p.id === product.id ? { ...p, amount: p.amount - 1 } : p),
// }
// const reducer = (state: ProductCart[], action: CartAction) => {
//   // switch (action.type) {
//   //   case "add":
//   //     return [...state, { ...action.product, amount: 1 }]
//   //   case "decrement":
//   //     return state.map(p => p.id === action.product.id ? { ...p, amount: p.amount - 1 } : p)
//   //   case "increment":
//   //     return state.map(p => p.id === action.product.id ? { ...p, amount: p.amount + 1 } : p)
//   //   case "remove":
//   //     return state.filter(p => p.id !== action.product.id)
//   // }
//   return reducerActions[action.type](state, action.product)
// }
// const Component = () => {
//   const [state, dispatch] = useReducer(reducer, [])

//   const handleAddProduct = (product: Product) => {
//     dispatch({ type: 'add', product })
//   }

//   const handleRemoveProduct = (product: Product) => {
//     dispatch({ type: 'remove', product })
//   }

//   const handleIncrementProduct = (product: Product) => {
//     dispatch({ type: 'increment', product })
//   }

//   const handleDecrementProduct = (product: Product) => {
//     dispatch({ type: 'decrement', product })
//   }

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <span>{product.name}</span>
//             <button onClick={() => handleAddProduct(product)}>Add</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Cart</h2>
//       <ul>
//         {state.map(product => (
//           <li key={product.id}>
//             <div>
//               <button onClick={() => handleIncrementProduct(product)}>+</button>
//               <span>{`${product.name} - x${product.amount}`}</span>
//               <button onClick={() => handleDecrementProduct(product)}>-</button>
//             </div>
//             <button onClick={() => handleRemoveProduct(product)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// Usando actions
// const reducer = (_: boolean, action: 'on' | 'off') => {
//   return action === 'on' ? true : false
// }
// const Component = () => {
//   const [state, dispatch] = useReducer(reducer, false)

//   return (
//     <div>
//       <button onClick={() => dispatch('on')}>On</button>
//       <button onClick={() => dispatch('off')}>Off</button>
//       <p>{state ? '👍' : '👎'}</p>
//     </div>
//   )
// }

// Sintaxe useReducer
// const reducer = (state: number, value: number | ((val: number) => number)) => {
//   if (typeof value === 'function') {
//     return value(state)
//   }
//   return value
// }
// const Component = () => {
//   const [state, setState] = useReducer(reducer, 0)

//   return (
//     <div>
//       <button onClick={() => {
//         setState(s => s - 1)
//         setState(s => s - 1)
//         setState(s => s - 1)
//       }}>Sub</button>
//       <span>{state}</span>
//       <button onClick={() => setState(state + 1)}>Add</button>
//     </div>
//   )
// }
