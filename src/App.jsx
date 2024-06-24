import { useReducer } from "react";
import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import { ShopContext, initialState, reducer } from "./context";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="book_parent">
      <ShopContext.Provider value={{ state, dispatch }}>
        <ProductList className="product_item"/>
        <Basket className="basket_item"/>
      </ShopContext.Provider>
    </div>
  );
};

export default App;

