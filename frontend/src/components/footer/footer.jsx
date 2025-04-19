import React from 'react'
import './footer.css'
import Facebook from '../logos/facebook'
import Instagram from '../logos/instagram'
import WhatsApp from '../logos/whastapp'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="brand">AuthenticoTours ©2025</span>
          </div>
  
          <div className="footer-right">
            <div className="footer-icons">
              <a href="https://www.instagram.com/authenticotours/" target='_blank'><Instagram className="footer-icon" /></a>
              <a href="https://www.facebook.com/autenticotours" target='_blank'><Facebook className="footer-icon" /></a>
              <a href="https://wa.me/50661392424?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20tours!"><WhatsApp className="footer-icon" /></a>
            </div>
            <div className="footer-text">
              <a href="#">Is there any problem with the website? Let us know!</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;