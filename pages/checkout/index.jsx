import  Head  from 'next/head'
import CustomerInfo from '../../_components/CustomerInfo/customerInfo'

export default function Home() {
  return (
    <>
      <Head>
          <title> Checkout Order </title>
      </Head>
      <CustomerInfo />
    </>
  )
}
