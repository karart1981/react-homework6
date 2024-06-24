import { useContext } from "react";
import { ShopContext } from "../context";
import '../App.css'
export const ProductItem = ({ name, id, price, photo }) => {
  const { dispatch } = useContext(ShopContext);

  return (
    <div>
         <img className="photo_item" src={photo} alt="product" />
         <p>{name}</p>
         <p>{price} USD</p>
         <button onClick={() => dispatch({ type: "ADD_BASKET", payload: id })}>MOVE</button>
    </div>
  );
};
