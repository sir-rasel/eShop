import CartIcon from '../CartIcon/CartIcon'
import HomeIcon from '../HomeIcon/HomeIcon'
import OrderIcon from '../OrderIcon/OrderIcon'

import styles from './header.module.css'

export default function Header(){
    return <div className={styles.header}>
        <HomeIcon />
        <CartIcon />
        <OrderIcon />
    </div>
}