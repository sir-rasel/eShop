import Link from 'next/link'
import styles from './homeIcon.module.css'

export default function HomeIcon(){
    return <div className={styles.homeIcon} title="Home Icon">
        <Link href="/">
            <img src={'icons/eshop.png'} alt="homeIcon" />
        </Link>
        <Link href="/">
            eShop
        </Link>
    </div>
}