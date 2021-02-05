import Link from 'next/link'
import styles from './cartIcon.module.css'

export default function CartIcon(){
    return <div className={styles.cartIcon} title="Cart Icon">
        <Link href="/cart">
            <img src={'icons/cart.png'} alt="cartIcon" />
        </Link>
        <Link href="/cart">
            0
        </Link>
    </div>
}