import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../_components/Layout/layout'
import CartProvider from '../_ContextProvider/cartProvider'
import OrderLengthProvider from '../_ContextProvider/orderLengthProvider'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      
      <Head>
          <title>eShop</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <CartProvider>
        <OrderLengthProvider>
          <Layout >
            <div className="container">
              <Component {...pageProps} />
            </div>
          </Layout>
          </OrderLengthProvider>
      </CartProvider>

    </React.Fragment>
  )
}

export default MyApp
