import { useCartContext } from '../../_ContextProvider/cartProvider'
import styles from './addToCart.module.css'
import {useEffect,useReducer} from 'react'

const reducer = (state, action) => {
    if(action.type === '-') 
        return {quantity: state.quantity - 1}
    else if(action.type === 'init')
        return {quantity: action.quantity}
    else 
        return {quantity: state.quantity + 1}
}

export default function AddToCartButton({product}){
    const {cart,addToCart} = useCartContext()
    const [state,dispatch] = useReducer(reducer, {quantity:0})

    useEffect(() => {
        let qty = 0
        cart.map (prod =>{
            if(prod.id === product.id){
                qty = prod.quantity
            }
        })
        dispatch({type:'init', quantity:qty})
    }, [])

    useEffect(() => {
        if(state.quantity){
            let isProductAlreadyExist = false
            let newCart = cart.map(prod => {
                if(prod.id === product.id){
                    prod.quantity = state.quantity
                    isProductAlreadyExist = true  
                }
                return prod
            })

            product = {...product, quantity:state.quantity}

            if(isProductAlreadyExist) addToCart([...newCart])
            else  addToCart([...newCart, product])
        }
        else {
            addToCart(cart.filter(item => {return item.id !== product.id}))
        }
    }, [state.quantity])

    return (
        <div className={styles.addToCartButton}>
            {
                state.quantity >= 1 ? 
                <button className={styles.minus} onClick={() => dispatch({type:'-'})}>-</button>
                : null
            }
            {
                state.quantity == 0 ? 
                <button className={styles.text} onClick={()=> dispatch({type:'+'})}>Add To Cart</button>
                :<button className={styles.text}>{state.quantity}</button>
            }
            <button className={styles.minus} onClick={() => dispatch({type:'+'})}>+</button>
        </div>
    )
}