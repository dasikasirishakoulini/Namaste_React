
import {useState,useContext} from 'react';
import {CDN_URL} from '../utils/constants';
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import{ useSelector } from "react-redux";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

const {loggedInUser} =useContext(UserContext);

//selector is a hook ,use it for reading data from cart
//subscribing to the store using selector for reading data

const cartItems = useSelector((store) => store.cart.items)

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img
            className="w-56"
            src={CDN_URL}
          />
          <div className="font-bold px-4 py-4 text-lg">you love food, we love you!</div>
        </div>
        <div className="flex items-center">
          <ul className = "flex p-4 m-4"> 
            <li className="px-4">OnlineStatus {onlineStatus? "🟢" : "🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"> <Link to="/About">About Us</Link></li>
            <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
            <li className="px-4">
              <Link to="/Cart"> 🛒 ({cartItems.length})</Link></li>
            <button className="login px-4  bg-blue-100 rounded-lg"
            onClick = {() =>{
              btnName === "Login"
              ?setBtnName("Logout")
              :setBtnName("Login");
            }}>{btnName}
            </button>
         <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  