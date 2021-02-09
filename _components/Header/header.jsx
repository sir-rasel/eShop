import CartIcon from '../CartIcon/cartIcon'
import HomeIcon from '../HomeIcon/homeIcon'
import OrderIcon from '../OrderIcon/orderIcon'

import styles from './header.module.css'

export default function Header(){
    return <div className={styles.header}>
        <HomeIcon />
        <CartIcon />
        <OrderIcon />
    </div>
}