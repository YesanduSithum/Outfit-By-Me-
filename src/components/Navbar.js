import React from 'react';
import '../Css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <img src="/outfit by me.jpg" alt="" className="logo" />
        <h2>Outfit By Me </h2>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Collection</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}; 

export default Navbar;
