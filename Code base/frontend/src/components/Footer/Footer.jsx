import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
  <div className="footer" id="footer">
<div className="footer-content">
    <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Enim culpa et sint irure eiusmod elit culpa elit id velit cupidatat. Nulla officia enim non precat velit. Ullamco commodo ea velit nostrud laboris minim magna enim sint anim aute.</p>
        <div className="footer-social-icons">
            <img src='' alt="" /><img src="" alt="" /><img src="" alt="" />
        </div>
    </div>
    <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
        <h2>Get in Touch</h2>
        <ul>
            <li>+84-234-236-9457</li>
            <li>contact@tomato.com</li>
        </ul>
    </div>
</div>
<hr />
<p className="footer-copyright">Copyright 2024  Eatout.com - All Right Reserved.</p>
  </div>)
};

export default Footer;
