import React from "react";
import './Footer.css';
import instagram_icon from '../Assets/instagram_icon.png'
import footer_logo from '../Assets/logo_big.png';
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
                <p>ShopStraight</p>
            </div>
            <ul className="footer-links">
                <li>Comapany</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon}/>
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon}/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon}/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>copyright @ 2024 - All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;