import ProductDetails from "../../_components/ProductDetails/productDetails";
import Products from './../../_utilities/products.json'
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

export const getStaticProps = async(context)=>{
    let product;
    Products.map(item=>{
        if(item.id === context.params.id){
            product = item
        }
    })
    
    return {
      props: {
        product
      }
    }
}

export const getStaticPaths = async()=>{
    const paths = Products.map(product => (
        { 
            params: {
                id : product.id.toString()
            } 
        }
    ))

    return {
        paths, 
        fallback: false
    }
}