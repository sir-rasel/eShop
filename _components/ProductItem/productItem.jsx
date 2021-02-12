import AddToCartButton from '../AddToCart/addToCart'
import styles from './productItem.module.css'
import Link from 'next/link'

export default function ProductItem ({product}) {
    return (
        <div className={styles.card} title="Click To See Details">
            <Link href={`productDetails/${product.id}`}>
                    <div>
                        <img src={product.image} alt="Product"/>
                        <div className={styles.details}>
                            <span>{product.name}</span>
                            <span className={styles.price}><strong>Price : </strong> {product.price} $ </span>
                            <span className={styles.price}><strong>In stock : </strong> {product.stock}</span>
                        </div>
                    </div>
            </Link>
            <AddToCartButton product={product}/>
        </div>
    )
}