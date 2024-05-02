import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './action';
import { useEffect } from 'react';

const ProductList = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {data.products.map((product) => {
                return <ProductItem product={product} key={product.id} />
            })}
        </div>
    );
};

export default ProductList;