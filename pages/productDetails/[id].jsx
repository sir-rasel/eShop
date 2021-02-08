import ProductDetails from "../../_components/ProductDetails/productDetails";
import Products from './../../_utilities/products.json'

export default function ProductDetailsPage({product}){
    return (
        <>
            <ProductDetails product={product}/>
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