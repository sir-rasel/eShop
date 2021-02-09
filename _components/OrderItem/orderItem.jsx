import styles from './orderItem.module.css'
import Link from 'next/link'

export default function OrderItem({order}){
    return (
        <Link href={`/orderDetails/${order.id}`}>
            <tr className={styles.container} title="Click to see details">
                <td>{order.id}</td>
                <td>{order.customer.name}</td>
                <td>{order.totalPrice}</td>
            </tr>
        </Link>
    )
}