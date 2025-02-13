
import { useState } from 'react';
import {CDN_URL} from '../utils/constants';
import {Link} from "react-router-dom";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={CDN_URL}
          />
          <div>you love food, we love you!</div>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
            <button className="login" 
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
  