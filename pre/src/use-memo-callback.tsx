// import { useCallback, useEffect, useMemo, useReducer } from "react"

// const useForceUpdate = () => useReducer(state => !state, false)[1]

// Avançado
// interface ComponentProps {
//   title: string
//   obj: object
//   func: () => void
// }

// const NewComponent = ({ title, obj, func }: ComponentProps) => {
//   useEffect(() => {
//     console.log(title)
//   }, [title, obj, func])

//   return <h1>{title}</h1>
// }

// const Component = () => {
//   const forceUpdate = useForceUpdate()

//   const obj = {}
//   const func = () => { }

//   const memoObj = useMemo(() => ({}), [])
//   const memoFunc = useCallback(() => { }, [])

//   return (
//     <>
//       <button type="button" onClick={forceUpdate}>
//         Rerender
//       </button>
//       <NewComponent title="Primitive" obj={obj} func={func} />
//       <NewComponent title="Non-Primitive" obj={memoObj} func={memoFunc} />
//     </>
//   )
// }

// Básico useCallback
// export const Component = () => {
//   const update = useForceUpdate()
//   const [name, setName] = useState('')

//   const getHello = () => `Hello, ${name}`
//   const getMemoizedHello = useCallback(() => `Hello, ${name}`, [name])

//   useEffect(() => {
//     console.log('default', getHello())
//   }, [getHello])
//   useEffect(() => {
//     console.log('memo', getMemoizedHello())
//   }, [getMemoizedHello])

//   return (
//     <div>
//       <button onClick={update}>Update</button>
//       <input type="text" value={name} onChange={e => setName(e.target.value)} />
//     </div>
//   )
// }

// Básico useMemo
// export const Component = () => {
//   const update = useForceUpdate()
//   const [name, setName] = useState('')

//   const hello = `Hello, ${name}`
//   const memoizedHello = useMemo(() => {
//     console.log('update')
//     return `Hello, ${name}`
//   }, [name])

//   return (
//     <div>
//       <button onClick={update}>Update</button>
//       <input type="text" value={name} onChange={e => setName(e.target.value)} />
//       <p>{hello}</p>
//       <p>{memoizedHello}</p>
//     </div>
//   )
// }
