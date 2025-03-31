import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

//subscribe to the store to read cart Items using useSelector

const dispatch = useDispatch();

const cartItems = useSelector((store) => store.cart.items )
const handleClearCart = () =>{
    dispatch(clearCart());
}

    return(
        <div className="text-center m-10 p-10">
         <h1 className=" text-2xl font-bold"> Cart Details </h1>
         <div className="w-6/12 m-auto ">
         <ItemList items = {cartItems}/>
         {cartItems.length === 0 ?<h1> Looks like your cart is empty ,shop now!Hurry up 🏇🏿 </h1>
         :<button className ="p-2,m-2 bg-black,text-white"
         onClick={handleClearCart}
         >Clear Cart</button>}
         </div>
        </div>
    )
}

export default Cart;