import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context";
import { BasketItem } from "./BasketItem"

export const Basket = () => {
    const {state:{basket}} = useContext(ShopContext)
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                    <th>Total {basket.length === 0 ? 0 :basket.reduce((a, b) => a + b.price * b.count, 0)} $</th>
                </tr>
            </thead>
            <tbody>
                {
                    basket.map(item => <BasketItem key={item.id}{...item}/>)
                }
            </tbody>
        </table>
    </div>
}