import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center m-4 p-4 bg-slate-100 shadow-lg rounded-lg">
      <div className="w-40">
        <img src={LOGO_URL} alt="logo" className="w-full h-auto" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-6 text-lg font-medium">
          <li className="flex items-center">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-blue-500 transition-colors"
            >
              Grocery
            </Link>
          </li>
          <button
            className="ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
            onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
