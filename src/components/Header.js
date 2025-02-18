
import {useState} from 'react';
import {CDN_URL} from '../utils/constants';
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
            <li className="px-4"><Link to="/Cart">Cart</Link></li>
            <button className="login px-4  bg-blue-100 rounded-lg"
            onClick = {() =>{
              btnName === "Login"
              ?setBtnName("Logout")
              :setBtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  