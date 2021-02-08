import {createContext,useState,useContext,useEffect} from 'react'

const CartContext = createContext()

export function useCartContext() {
    return useContext(CartContext)
}

export default function CartProvider({children}) {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart"));
        if(localCart)   
            setCart(localCart)
    }, [])

    function addToCart(products){
        localStorage.setItem("cart",JSON.stringify(products))
        setCart(products)
    }

    return (
      <CartContext.Provider value={{cart,addToCart}}>
        {children}
      </CartContext.Provider>
    )
  }