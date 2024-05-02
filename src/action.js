import { INCREMENT_PRODUCT, DECREMENT_PRODUCT, SET_PRODUCTS, FETCH_PRODUCTS } from './actionTypes';

export const incrementProduct = (id) => {
    return {
        type: INCREMENT_PRODUCT,
        payload: id
    };
}

export const decrementProduct = (id) => {
    return {
        type: DECREMENT_PRODUCT,
        payload: id
    };
}

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    };
}

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS
    };
}

