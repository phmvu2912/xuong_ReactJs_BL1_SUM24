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

        // Create
        case 'CREATE_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        // Update
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map((item) => (item.id == action.payload.id ? action.payload : item))
            }

        default:
            return;

    }
}