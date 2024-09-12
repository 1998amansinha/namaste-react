import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {

  const [btnName, setBtnName] = useState("Login")

  const handleLoginClick = () => {
    setBtnName(btnName==="Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <div className="headerLogo">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={handleLoginClick}>{btnName}</button> 
        </ul>
      </div>
    </div>
  );
};

export default Header;