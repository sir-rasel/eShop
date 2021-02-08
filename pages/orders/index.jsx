import  Head  from 'next/head'
import Link from 'next/link'
import OrderItem from '../../_components/OrderItem/orderItem'

export default function Orders({orders}) {

  return (
    <div className="container">
      <Head>
          <title> Orders List </title>
      </Head>

      <h2 className="line">Your Orders</h2>
      
      {
        orders.length ?
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(item => {
                return <OrderItem key={item.id} order={item}/>
              })
            }
          </tbody>
        </table>
        : null
      }

      {
        orders.length ?
        null
        : <p>You don't have any order till now!!</p>
      }

      <h2 className="back">
        <Link href="/">
          Back to shoping!!
        </Link>
      </h2>

      <style jsx>{
      `
        .container {
          text-align: center;
          align-content: center;
        }
        .container table{
          width: max-content;
          margin: 0 auto;
        }
        .line {
          text-decoration: underline;
        }
        .back{
          color:red;
          text-decoration : underline;
        }
        .back:hover{
          color:blue;
          text-decoration : none;
        }
      `
      }
      </style>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/orders`)
  const data = await res.json()

  return {
    props: {
      orders: data
    }
  }
}


