
// useImperativeHandle
// interface ImperativeRef {
//   inputValue: string
//   hello: () => string
// }
// const Input = forwardRef<ImperativeRef, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
//   const inputRef = useRef<HTMLInputElement>(null)
//   useImperativeHandle(ref, () => ({
//     inputValue: inputRef.current!.value,
//     hello: () => `Hello, ${inputRef.current!.value}`
//   }))

//   return <input type="text" {...props} ref={inputRef} />
// })

// const Component = () => {
//   const ref = useRef<ImperativeRef>(null)

//   return (
//     <div>
//       <Input ref={ref} />
//       <button onClick={() => {
//         console.log(ref.current!.hello())
//         console.log(ref.current!.inputValue)
//       }}>Call</button>
//     </div>
//   )
// }

// Acessando elementos
// const Component = () => {
//   const inputRef = useRef<HTMLInputElement>(null)

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     console.log(inputRef.current!.value)
//     inputRef.current!.style.backgroundColor = '#f3f'
//     const elementScroll = inputRef.current!.getBoundingClientRect().top + window.scrollY
//     console.log(elementScroll)
//     window.scrollTo({ top: elementScroll })
//     inputRef.current!.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={inputRef} />
//       <h1>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, tempora quam ut pariatur delectus, porro provident id temporibus eaque, corrupti nam dolorum unde a harum itaque. Eaque quibusdam harum ipsam?
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, tempora quam ut pariatur delectus, porro provident id temporibus eaque, corrupti nam dolorum unde a harum itaque. Eaque quibusdam harum ipsam?
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, tempora quam ut pariatur delectus, porro provident id temporibus eaque, corrupti nam dolorum unde a harum itaque. Eaque quibusdam harum ipsam?
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, tempora quam ut pariatur delectus, porro provident id temporibus eaque, corrupti nam dolorum unde a harum itaque. Eaque quibusdam harum ipsam?
//       </h1>
//       <button type="submit">Send</button>
//     </form>
//   )
// }

// Variável mutável
// const Component = () => {
//   const [counter, setCounter] = useState(0)
//   const ref = useRef(0)
//   let mut = 0

//   const decrement = () => {
//     setCounter(state => state - 1)
//     mut -= 1
//     ref.current -= 1
//   }

//   const increment = () => {
//     setCounter(state => state + 1)
//     mut += 1
//     ref.current += 1
//   }

//   console.log(ref.current)
//   console.log(mut)

//   return (
//     <div>
//       <button onClick={decrement}>Sub</button>
//       <span>{counter}</span>
//       <button onClick={increment}>Add</button>
//     </div>
//   )
// }
