import { combineReducers } from 'redux';

import products from './productreducer';
import cart from './cartreducer';

const rootReducer = combineReducers({
    products,
    cart,
});

export default rootReducer;