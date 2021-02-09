import { useOrderLengthContext } from '../../_ContextProvider/orderLengthProvider'
import styles from './OrderDetails.module.css'

export default function OrderDetails({order}){
    const {updateLength} = useOrderLengthContext()
    updateLength()
    
    return (
        <div className={styles.container}>
            <p>Order ID: {order.id}</p>
            <p>Custmer Name : {order.customer.name}</p>
            <p>Customer Mobile: {order.customer.phone}</p>
            <p>Customer Address: {order.customer.address}</p>
            <p>Product Details: </p>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.products.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <p>Total Price: {order.totalPrice}</p>
        </div>
    )
}