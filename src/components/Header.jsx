import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'

const Header = () => {
  const [loginButton, setLoginButton] = useState('Login');

  const toggleLoginStatus = ()=>{
    loginButton==='Login'?setLoginButton('Logout'):setLoginButton('Login');
  };
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Spoon Feed logo"
          />
        </div>
        <div className="nav-items">
          <ul className="list-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>toggleLoginStatus()}>{loginButton}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header