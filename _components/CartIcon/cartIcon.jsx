import Link from 'next/link'
import { useCartContext } from '../../_ContextProvider/cartProvider'
import styles from './cartIcon.module.css'

export default function CartIcon(){
    const {cart} = useCartContext()
    const cartItemLength = cart.length

    return <div className={styles.cartIcon} title="Cart Icon">
        <Link href="/cart">
            <img src={'icons/cart.png'} alt="cartIcon" />
        </Link>
        <Link href="/cart">
            {`${cartItemLength}`}
        </Link>
    </div>
}