import Link from 'next/link'
import OrderDetails from "../../_components/OrderDetails/orderDetails";

export default function OrderDetailsPage({order}){
    return (
        <>
            <OrderDetails order={order}/>
            <h2 className="back">
                <Link href="/">
                Back to shoping!!
                </Link>
            </h2>

            <style jsx>{
            `
                .back{
                    color:red;
                    text-decoration : underline;
                    text-align: center;
                }
                .back:hover{
                    color:blue;
                    text-decoration : none;
                }
            `
            }
            </style>
        </>
    )
}

export const getServerSideProps = async(context)=>{
    const res = await fetch(`http://localhost:3000/api/orders`)
    const orders = await res.json()
    
    let order = null;
    orders.map(item=>{
        if(item.id.toString() === context.params.id){
            order = item
        }
    })
    
    return {
      props: {
        order
      }
    }
}

// export const getStaticProps = async(context)=>{
//     const res = await fetch(`http://localhost:3000/api/orders`)
//     const orders = await res.json()
    
//     let order;
//     orders.map(item=>{
//         if(item.id.toString() === context.params.id){
//             order = item
//         }
//     })
    
//     return {
//       props: {
//         order
//       }
//     }
// }

// export const getStaticPaths = async()=>{
//     const res = await fetch(`http://localhost:3000/api/orders`)
//     const orders = await res.json()

//     const paths = orders.map(order => (
//         { 
//             params: {
//                 id : order.id.toString()
//             } 
//         }
//     ))

//     return {
//         paths, 
//         fallback: false
//     }
// }