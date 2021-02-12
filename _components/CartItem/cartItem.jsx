import { useCartContext } from '../../_ContextProvider/cartProvider'
import styles from './cartItem.module.css'

export default function CartItem({product}){
    const {cart, addToCart} = useCartContext()
    let price = parseFloat(product.price) * parseInt(product.quantity)

    const updateQuantity = type => {
        if(type === '+'){
            let newCart = cart.map(prod => {
                if(prod.id === product.id){
                    if(prod.quantity + 1 <= product.stock)
                        prod.quantity = prod.quantity + 1
                    else alert(`Out of stock, product availabe ${product.stock}`)
                }
                return prod
            })
            addToCart(newCart)
        }
        else{
            let newCart = cart.map(prod => {
                if(prod.id === product.id){
                    prod.quantity = prod.quantity - 1
                }
                return prod
            })
            addToCart(newCart.filter(item => {return item.quantity > 0}))
        }
    }

    const removeItem = () => {
        let newCart = cart.filter(prod => {
            return prod.id !== product.id
        })
        addToCart(newCart)
    }

    return (
        <tr className={styles.container}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{price}</td>
            <td>
                {
                    product.quantity >= 1?
                    <button onClick={() => updateQuantity('-')}> - </button>
                    :null
                }
                {
                    <>
                        <button>{product.quantity}</button>
                        <button onClick={() => updateQuantity('+')}> + </button>
                    </>
                }
            </td>
            <td>
                <button className={styles.remove} onClick={() => removeItem()}>X</button>
            </td>
        </tr>
    )
}