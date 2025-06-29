import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../Css/Footer.css';  // Adjusted path

const Footer = () => {
  return (
    <footer>
      <p>© 2025 Outfut By Me. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/share/19KYhWPGyU/?mibextid=wwXIfr"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@outfitbyme0762154360?_t=ZS-8xc0tYZETU9&_r=1"><FaTiktok /></a>
        <a href="#"><FaWhatsapp /></a>
      </div>
    </footer>
  );
};

export default Footer;
