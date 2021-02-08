import { useCartContext } from '../../_ContextProvider/cartProvider'
import styles from './customerInfo.module.css'
import { useRouter } from 'next/router'

export default function CustomerInfo(){
    const {cart, addToCart} = useCartContext()
    const router = useRouter()

    let totalPrice = 0
    const orderedProduct = cart.map(item =>{
        let price = (parseFloat(item.price) * parseInt(item.quantity))
        totalPrice += price
        return {...item, price:price}
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        
        let customer = {
            name : event.target.name.value,
            phone : event.target.phone.value,
            address : event.target.address.value
        }

        fetch('http://localhost:3000/api/orders',{
            method: 'POST',
            body: JSON.stringify({
                products: orderedProduct,
                customer,
                totalPrice
            })
        }).then(res=>{
            if(res.status === 201){
                addToCart([])
                res.json().then(order=>router.push(`/orderDetails/${order.id}`))
            } else{
                alert("Network Error!")
            }
        })
    }

    return (
        <div className={styles.customer}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name : </label> 
                <input type="text" id="name" name="name" placeholder="Saiful Islam Rasel" required/> <br/>
                <label htmlFor="phone"> Phone : </label>
                <input type="tel" id="phone"  name="phone" pattern="[0-9]{3}-[0-9]{8}" 
                    placeholder="01X-XXXXXXXX" required/> <br/>
                <label htmlFor="address"> Address : </label>
                <input type="text" id="address" name="address" placeholder="Fatullah, Narayangonj" required/> <br/>
                <input type="submit" value="Place Order" />
            </form>
        </div>
    )
}