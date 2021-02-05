import Link from 'next/link'
import styles from './../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h2>This is home page!!</h2>
      
      <h1 className={styles.title}>
        <Link href="/cart">
          Cart page!
        </Link>
      </h1>
      <h1 className={styles.title}>
        <Link href="/orders">
          Orders page!
        </Link>
      </h1>
      <h1 className={styles.title}>
        <Link href="/productDetails">
          Product Details page!
        </Link>
      </h1>
    </>
  )
}
