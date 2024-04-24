import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  const toggleLoginStatus = () => {
    loginButton === "Login"
      ? setLoginButton("Logout")
      : setLoginButton("Login");
  };
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-21" src={LOGO_URL} alt="Spoon Feed logo" />
      </div>
      <div className="">
        <ul className="flex p-4 m-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button onClick={() => toggleLoginStatus()}>{loginButton}</button>
          <li className={useOnlineStatus() === false ? "offline" : "online"}>
            {useOnlineStatus() === false ? "🔴Offline" : "🟢Online"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
