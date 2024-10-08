import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faShoppingCart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../../assets/assets";
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState('Home');
    
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    };


  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} className="logo" alt="" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href="#explore-collection" onClick={() => setMenu("Collection")} className={menu === "Collection" ? "active" : ""}>Collection</a>
        <a href="#about-us" onClick={() => setMenu("About-us")} className={menu === "About-us" ? "active" : ""}>About Us</a>
        <a href="#footer" onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-icon">
          <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => {setShowLogin(true)}}>Sign in</button> 
          : <div className="navbar-profile">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><FontAwesomeIcon className="icon" icon={faShoppingBag} /><p>Orders</p></li>
              <hr />
              <li onClick={logout} ><FontAwesomeIcon className="icon" icon={faSignOut} /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
