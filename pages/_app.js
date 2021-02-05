import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../_components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      
      <Head>
          <title>eShop</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout >
        <Component {...pageProps} />
      </Layout>

    </React.Fragment>
  )
}

export default MyApp
