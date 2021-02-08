import  Head  from 'next/head'
import Link from 'next/link'
import CartItem from '../../_components/CartItem/cartItem'
import { useCartContext } from '../../_ContextProvider/cartProvider'
import calculateTotalPrice from './../../_helperFunction/calculateTotalPrice'

export default function CartList() {
  const {cart} = useCartContext()

  let total = calculateTotalPrice(cart)

  return (
    <div className="container">
      <Head>
        <title> Cart page </title>
      </Head>

      <h2 className="line">Shopping Cart : </h2>

      {
        cart.length ?
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map(item => {
                return <CartItem key={item.id} product={item}/>
              })
            }
          </tbody>
        </table>
        : null
      }

      {
        cart.length ?
        <>
          <p className="total">Total : {total}</p>
          <Link href="/checkout">
            <button className="checkout"> Checkout Order </button>
          </Link>
        </>
        : <p>You don't choose any product till now!!</p>
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
          align-items:center;
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

        .total {
          font-weight:bolder;
          font-size: 1.5rem;
        }

        .checkout {
          padding: 5px;
        }

        .checkout:hover {
          padding: 10px;
          background-color:red;
          color: white;
        }

      `
      }
      </style>
    </div>
  )
}
