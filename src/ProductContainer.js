import { connect } from 'react-redux';
import ProductList from './ProductList';

const mapStateToProps = state => ({
    data: state.data,
});


const ProductContainer = connect(mapStateToProps)(ProductList);

export default ProductContainer;