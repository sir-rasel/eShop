import styles from './productDetails.module.css'
import AddToCartButton from './../AddToCart/addToCart'

export default function ProductDetails({product}){
    return (
        <div className={styles.productDetails}>
            <img src={product.image} alt="Product Image"/>
            <p><strong>Id :</strong> {product.id}</p>
            <p><strong>Tittle :</strong> {product.title}</p>
            <p><strong>Description :</strong> {product.description}</p>
            <p><strong>Price :</strong> {product.price} $</p>
            
            <AddToCartButton product={product}/>
        </div>
    )
}