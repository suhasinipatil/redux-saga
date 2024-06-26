import { FETCH_PRODUCTS, SET_PRODUCTS } from './actionTypes';

const initialState = {
    products: []
};

const productreducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case FETCH_PRODUCTS:
            return state;
        default:
            return state;
    }
}

export default productreducer;