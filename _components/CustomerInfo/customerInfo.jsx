import { useCartContext } from '../../_ContextProvider/cartProvider'
import styles from './customerInfo.module.css'
import { useRouter } from 'next/router'

export default function CustomerInfo(){
    const {cart, addToCart} = useCartContext()
    const router = useRouter()

    const orderedProduct = cart.map(item =>{
        let price = (parseFloat(item.price) * parseInt(item.quantity))
        return {...item, price:price}
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        

        addToCart([])
        alert("Successfully submit order!!")
        router.push('/')
    }

    return (
        <div className={styles.customer}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name : </label> 
                <input type="text" id="name" placeholder="Saiful Islam Rasel" required/> <br/>
                <label htmlFor="phone"> Phone : </label>
                <input type="tel" id="phone"  pattern="[0-9]{3}-[0-9]{8}" 
                    placeholder="01X-XXXXXXXX" required/> <br/>
                <label htmlFor="address"> Address : </label>
                <input type="text" id="address" placeholder="Fatullah, Narayangonj" required/> <br/>
                <input type="submit" value="Place Order" />
            </form>
        </div>
    )
}