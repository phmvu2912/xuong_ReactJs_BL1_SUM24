export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        
        // Remove
        case 'REMOVE_PRODUCTS': 
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }

        default: 
            return;

    }
}