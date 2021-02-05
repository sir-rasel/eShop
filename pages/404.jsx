import Link from 'next/link'
import  Head  from 'next/head'
import styles from './../styles/404.module.css'

export default function FourOhFour() {
  return <div className={styles.errorMassage}>
    <Head>
        <title> Error Page </title>
    </Head>
    <h1> 404 - Page Not Found!! </h1>
    <p> You are try to access invalid page!! </p>
    <p>Please back to home page and enjoy shooping :) </p>
    <Link href="/">
        Go back home
    </Link>
  </div>
}