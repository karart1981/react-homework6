import React, { useContext } from "react";
import { ShopContext } from "../context";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
    const {state:{products}} = useContext(ShopContext)

    return (
        <div>
            {
                products.map(item => <ProductItem key={item.id} {...item} />)
            }
        </div>
            
    );
}

export default ProductList;
