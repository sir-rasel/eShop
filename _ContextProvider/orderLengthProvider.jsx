import {createContext,useState,useContext,useEffect} from 'react'

const OrderLengthContext = createContext()

export function useOrderLengthContext() {
    return useContext(OrderLengthContext)
}

export default function OrderLengthProvider({children}) {
    const [length, setLength] = useState(0)

    useEffect( async () => {
        const res = await fetch(`http://localhost:3000/api/orders`)
        const data = await res.json()
        setLength(data.length)
    }, [])

    async function updateLength(){
        const res = await fetch(`http://localhost:3000/api/orders`)
        const data = await res.json()
        setLength(data.length)
    }

    return (
      <OrderLengthContext.Provider value={{length,updateLength}}>
        {children}
      </OrderLengthContext.Provider>
    )
  }