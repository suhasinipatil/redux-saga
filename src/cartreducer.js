import { INCREMENT_PRODUCT, DECREMENT_PRODUCT } from "./actionTypes";

const initialState = {
    cart: [],
    totalCount: 0,
};

const cartreducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_PRODUCT:
            const item = state.cart.find(item => item.id === action.payload);
            if (!item) {
                return {
                    ...state,
                    totalCount: state.totalCount + 1,
                    cart: [
                        ...state.cart,
                        {
                            id: action.payload,
                            quantity: 1
                        }
                    ]
                };
            }
            else {
                return {
                    ...state,
                    totalCount: state.totalCount + 1,
                    cart: state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
                };
            }
        case DECREMENT_PRODUCT:
            return {
                ...state,
                totalCount: state.totalCount - 1,
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
