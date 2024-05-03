import styles from './styles/ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { incrementProduct, decrementProduct } from './action';
const ProductItem = ({ product }) => {

    const dispatch = useDispatch();

    const changeCartCount = () => {
        dispatch(incrementProduct(product.id));
    };

    return (
        <div className={styles.productItem}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button onClick={changeCartCount}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;