import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import '../components/css/Header.css'

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("Header rendered");

  useEffect(() => {
    console.log("useEffect() called");
  }, []);

  return (
    <div className="header">
      <div className="headerLogo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
