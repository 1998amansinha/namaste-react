import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItems } from "../utils/redux/cartSlice";

const Cart = () => {

  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleRemoveItem = () => {
        dispatch(removeItems())
    }

  return (
    <div>
      <div className="text-center w-1/2 m-auto">
        <h1 className="font-bold text-xl m-5 p-5">Cart</h1>
        <ItemList items={cartItem} />
      </div>
      <div className="text-center m-2">
        <button className="bg-blue-400 p-3 rounded-lg text-white shadow-lg hover:bg-blue-800" onClick={handleRemoveItem}>Remove Item</button>
      </div>
      <div className="text-center">
        <button className="bg-blue-400 p-3 rounded-lg text-white shadow-lg hover:bg-blue-800" onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
