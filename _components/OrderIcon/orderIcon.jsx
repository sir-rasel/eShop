import Link from 'next/link'
import styles from './orderIcon.module.css'

export default function OrderIcon(){
    return <div className={styles.orderIcon} title="Orders Icon">
        <Link href="/orders">
            <img src={'icons/orders.png'} alt="ordersIcon" />
        </Link>
        <Link href="/orders">
            0
        </Link>
    </div>
}