// Sintaxe do useState
// const getItem = () => {
//   const [counter, setCounter] = useState(0)
//   return { counter, setCounter }
// }
// const Component = () => {
//   const [counter, setCounter] = useState(0)
//   const { counter, setCounter } = getItem()

//   return (
//     <div>
//       <button onClick={() => setCounter(counter - 1)}>Sub</button>
//       <span>{counter}</span>
//       <button onClick={() => setCounter(counter + 1)}>Add</button>
//     </div>
//   )
// }

// Hooks sempre são renderizados
// const Component = ({ isLoading = false }) => {
//   if (isLoading) {
//     return <p>Loading...</p>
//   }

//   const [counter, setCounter] = useState(0)

//   return (
//     <div>
//       <button onClick={() => setCounter(counter - 1)}>Sub</button>
//       <span>{counter}</span>
//       <button onClick={() => setCounter(counter + 1)}>Add</button>
//     </div>
//   )
// }

// SetState async
// const Component = () => {
//   const [counter, setCounter] = useState(0)

//   const decrement = () => {
//     // setCounter(counter - 1)
//     // setCounter(counter - 1)
//     // setCounter(counter - 1)
//     // setCounter(counter - 1)
//     // console.log(counter)

//     setCounter(state => state - 1)
//     setCounter(state => state - 1)
//     setCounter(state => state - 1)
//     setCounter(state => {
//       const newState = state - 1
//       // console.log(newState)
//       return newState
//     })
//   }

//   const increment = () => {
//     // setCounter(counter + 1)
//     // setCounter(counter + 1)
//     // setCounter(counter + 1)
//     // setCounter(counter + 1)
//     // console.log(counter)

//     setCounter(state => state + 1)
//     setCounter(state => state + 1)
//     setCounter(state => state + 1)
//     setCounter(state => {
//       const newState = state + 1
//       // console.log(newState)
//       return newState
//     })
//   }
//   console.log(counter)

//   return (
//     <div>
//       <button onClick={decrement}>Sub</button>
//       <span>{counter}</span>
//       <button onClick={increment}>Add</button>
//     </div>
//   )
// }

// States complexos
// interface Person {
//   id: number
//   name: string
//   age: string
// }
// let id = 0
// const Component = () => {
//   const [form, setForm] = useState<Omit<Person, 'id'>>({} as Omit<Person, 'id'>)
//   const [people, setPeople] = useState<Person[]>([])

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target
//     setForm((state) => ({
//       ...state,
//       [name]: value
//     }))
//   }

//   const handleAddPeople = () => {
//     if (!form) return
//     setPeople(state => [...state, { id, name: form.name, age: form.age }])
//     id++
//   }

//   return (
//     <ul>
//       <input type="text" name="name" onChange={handleChange} />
//       <input type="number" name="age" onChange={handleChange} />
//       <button onClick={handleAddPeople}>Add</button>
//       {people.map(person => (
//         <li key={person.id}>
//           {`${person.name} - ${person.age} anos`}
//         </li>
//       ))}
//     </ul>
//   )
// }

// Persistindo estados
// interface Person {
//   id: number
//   name: string
//   age: string
// }
// let incrementalId = 0
// const Component = () => {
//   const [form, setForm] = useState<Omit<Person, 'id'>>({} as Omit<Person, 'id'>)
//   const [people, setPeople] = useState<Person[]>(() => {
//     const storedPeople = localStorage.getItem('people')
//     return storedPeople ? JSON.parse(storedPeople) : []
//   })

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target
//     setForm((state) => ({
//       ...state,
//       [name]: value
//     }))
//   }

//   const handleAddPeople = (id: number) => {
//     if (!form) return
//     const hasId = people.some(person => person.id === id)
//     if (hasId) {
//       incrementalId++
//       handleAddPeople(incrementalId)
//       return
//     }
//     setPeople(state => {
//       const newState = [...state, { id, name: form.name, age: form.age }]
//       localStorage.setItem('people', JSON.stringify(newState))
//       incrementalId++
//       return newState
//     })
//   }

//   return (
//     <ul>
//       <input type="text" name="name" onChange={handleChange} />
//       <input type="number" name="age" onChange={handleChange} />
//       <button onClick={() => handleAddPeople(incrementalId)}>Add</button>
//       {people.map(person => (
//         <li key={person.id}>
//           {`${person.name} - ${person.age} anos`}
//         </li>
//       ))}
//     </ul>
//   )
// }

// Renderização
// const Subcomponent = memo(({ setCounter }: any) => {
//   console.log('Subcomponent')
//   return <p>Subcomponent</p>
// })
// const Component = () => {
//   const [counter, setCounter] = useState(0)

//   return (
//     <div>
//       <button onClick={() => setCounter(counter - 1)}>Sub</button>
//       <span>{counter}</span>
//       <button onClick={() => setCounter(counter + 1)}>Add</button>
//       <Subcomponent setCounter={setCounter} />
//     </div>
//   )
// }