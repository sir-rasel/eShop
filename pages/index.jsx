import  Head  from 'next/head'
import Link from 'next/link'
import styles from './../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
          <title> Products List </title>
      </Head>
      
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
