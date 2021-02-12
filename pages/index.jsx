import  Head  from 'next/head'
import ProductItem from '../_components/ProductItem/productItem'
import styles from './../styles/Home.module.css'

export default function Home({products}) {
  return (
    <>
      <Head>
        <title> Products List </title>
      </Head>
      
      <div className={styles.container}>
        {
          products.map( (product) => {
            return <ProductItem key={product.id} product={product} />
          })
        }
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/products`)
  const Products = await res.json()

  return {
    props: {
      products: Products
    }
  }
}