import ProductDetails from "../../_components/ProductDetails/productDetails";
import Link from 'next/link'

export default function ProductDetailsPage({product}){
    return (
        <>
            <ProductDetails product={product}/>
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
    const res = await fetch(`http://localhost:3000/api/products`)
    const Products = await res.json()

    let product = null;
    Products.map(item=>{
        if(item.id === context.params.id){
            product = item
        }
    })

    if(product === null){
        context.res.setHeader("location", "/404");
        context.res.statusCode = 302;
        context.res.end();
    }
    
    return {
      props: {
        product
      }
    }
}

// export const getStaticPaths = async()=>{
//     const paths = Products.map(product => (
//         { 
//             params: {
//                 id : product.id.toString()
//             } 
//         }
//     ))

//     return {
//         paths, 
//         fallback: false
//     }
// }