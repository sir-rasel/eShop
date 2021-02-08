import  Head  from 'next/head'
import ProductItem from '../_components/ProductItem/productItem'
import styles from './../styles/Home.module.css'
import Products from './../_utilities/products.json'

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

export const getStaticProps = async => {
  return {
    props: {
      products: Products
    }
  }
}