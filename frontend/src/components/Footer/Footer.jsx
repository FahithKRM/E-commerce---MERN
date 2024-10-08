import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Explore our collection of men's fashion essentials and statement
            pieces. Shop confidently with our commitment to quality and style.
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <div className="footer-social-icons">
            <img src={assets.instagram_icon} alt="" />
            <img src={assets.whatsapp_icon} alt="" />
            <img src={assets.pintester_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Collection</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94-011-222-3333</li>
            <li>stylehub@gmail.com</li>
          </ul>
          <div className="app-download">
            <p>For Better Experience Download Style Hub App</p>
            <div className="app-download-icon">
              <img src={assets.play_store} alt="" />
              <img src={assets.app_store} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright &copy; 2024 StyleHub. All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
