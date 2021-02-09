import Link from 'next/link'
import { useOrderLengthContext } from '../../_ContextProvider/orderLengthProvider'
import styles from './orderIcon.module.css'

export default function OrderIcon(){
    const {length} = useOrderLengthContext()

    return <div className={styles.orderIcon} title="Orders Icon">
        <Link href="/orders">
            <img src={'icons/orders.png'} alt="ordersIcon" />
        </Link>
        <Link href="/orders">
            <a>{length}</a>
        </Link>
    </div>
}