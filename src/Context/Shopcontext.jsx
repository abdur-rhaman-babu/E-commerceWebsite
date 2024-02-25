/* eslint-disable react/prop-types */
import { createContext } from "react";
import all_product from "../component/Assets/all_product";
export const shopContext = createContext(null)

const ShopcontextProvider = ({children}) => {

    return (
        <shopContext.Provider value={all_product}>
            {children}
        </shopContext.Provider>
    );
};

export default ShopcontextProvider;



