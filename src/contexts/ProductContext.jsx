import { createContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers/productReduce";
import instance from "../services/axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, { products: [] })

    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get('products');

                // console.log(data)

                dispatch({ type: 'SET_PRODUCTS', payload: data });
            } catch (error) {
                console.log(e)
            }
        })()
    }, [])

    return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
    
}

export default ProductProvider