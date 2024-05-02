import { INCREMENT_PRODUCT, DECREMENT_PRODUCT } from "./actionTypes";

const initialState = {
    cart: []
};

const cartreducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_PRODUCT:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                })
            };
        case DECREMENT_PRODUCT:
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                })
            };
        default:
            return state;
    }
};

export default cartreducer;
