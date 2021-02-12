import { useCartContext } from '../../_ContextProvider/cartProvider'
import styles from './customerInfo.module.css'
import { useRouter } from 'next/router'

export default function CustomerInfo(){
    const {cart, addToCart} = useCartContext()
    const router = useRouter()

    const handleSubmit = async event => {
        event.preventDefault()
        
        let totalPrice = 0
        const orderedProduct = cart.map(item =>{
            let price = (parseFloat(item.price) * parseInt(item.quantity))
            totalPrice += price
            return {...item, price:price}
        })

        let customer = {
            name : event.target.name.value,
            phone : event.target.phone.value,
            address : event.target.address.value
        }

        //handle products data via api
        const res = await fetch(`http://localhost:3000/api/products`)
        const products = await res.json()

        let arr = []
        cart.forEach(item => {
            products.forEach(product => {
                if(product.id === item.id){
                    if(product.stock < item.quantity){
                        arr.push(item.id)
                    }
                    else{
                        product.stock -= item.quantity
                    }
                }
            })
        })

        if(arr.length){
            alert(`Products ${arr.toString()} out of stock, please reduce quantity.`)
            return
        }
        else {
            fetch('http://localhost:3000/api/products',{
                method: 'POST',
                body: JSON.stringify(
                    products
                )
            }).then(res=>{
                if(res.status !== 201){
                    alert("Network Error!")
                }
            })
        }
        // handle orders data via api
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