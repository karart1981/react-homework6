import { useContext } from "react";
import { ShopContext } from "../context";
export const BasketItem = ({ id, name, price, count}) => {
    const { dispatch } = useContext(ShopContext)
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{Number(count) * Number(price)}</td>
            <td>
                <button onClick={() => dispatch({ type:"ADD_COUNT", payload:id})}>Add</button>
                <button onClick={() => dispatch({ type: "REMOVE_COUNT", payload: id })}>Remove</button>
                <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}>Delete</button>
            </td>
        </tr>
    )
}
