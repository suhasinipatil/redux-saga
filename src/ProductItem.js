import styles from './styles/ProductItem.module.css';

const ProductItem = ({ product }) => {
    return (
        <div className={styles.productItem}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductItem;