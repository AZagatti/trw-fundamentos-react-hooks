// import { useState } from "react"

// export const Component = () => {
//   const [counter, setCounter] = useState(0)
//   const [name, setName] = useState('')
  // Estrutura
  // useEffect(() => {
  //   console.log('mount')
  //   setCounter(state => state + 1)
  //   return () => {
  //     console.log('unmount')
  //   }
  // }, [])
  // Loop
  // useEffect(() => {
  //   console.log('mount')
  //   // setCounter(counter + 1)
  //   setCounter(state => state + 1)
  //   return () => {
  //     console.log('unmount')
  //   }
  // // }, [counter])
  // }, [])
  // Limpando listeners
  // useEffect(() => {
  //   const cb = (e: MouseEvent) => console.log(e.offsetX)
  //   document.addEventListener('mousemove', cb)
  //   return () => {
  //     document.removeEventListener('mousemove', cb)
  //   }
  // })
  // Async
  // const getUser = async () => {
  //   const res = await fetch('https://api.github.com/users/azagatti')
  //   const data = await res.json()
  //   console.log(data)
  // }
  // useEffect(() => {
  //   fetch('https://api.github.com/users/azagatti').then(res => res.json()).then(console.log)
  //   const getUser = async () => {
  //     const res = await fetch('https://api.github.com/users/azagatti')
  //     const data = await res.json()
  //     console.log(data)
  //   }
  //   getUser()
  //   ;(async () => {
  //     const res = await fetch('https://api.github.com/users/azagatti')
  //     const data = await res.json()
  //     console.log(data)
  //   })()
  // }, [])
  // Condicional
  // useEffect(() => {
  //   if (counter === 3) {
  //     fetch('https://api.github.com/users/azagatti')
  //       .then(res => res.json())
  //       .then(console.log)
  //   }
  // }, [counter])
  // Diferença pro useLayoutEffect
  // useEffect(() => {
  // // useLayoutEffect(() => {
  //   fetch('https://api.github.com/users/azagatti')
  //     .then(res => res.json())
  //     .then(data => setName(data.name))
  // }, [])

//   return (
//     <div>
//       <button onClick={() => setCounter(counter - 1)}>Sub</button>
//       <span>{counter}</span>
//       <button onClick={() => setCounter(counter + 1)}>Add</button>
//       <span>{name}</span>
//     </div>
//   )
// }