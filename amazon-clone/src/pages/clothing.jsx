import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/clothing.css'; // Make sure the path is correct
import smileyLogo from '../assets/smiley.svg'; // Adjust path as necessary
// Import other assets similarly

function Clothing() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src={smileyLogo} width="100" alt="logo" />
        </Link>
        <div className="nav-country">
          <img src="../assets/location_icon.png" height="20" alt="" />
          <div>
            <p>Deliver to</p>
            <h1>United States</h1>
          </div>
        </div>
        <div className="nav-search">
          <div className="nav-search-category">
            <p>All</p>
            <img src="../assets/dropdown_icon.png" height="12" alt="" />
          </div>
          <input type="text" className="nav-search-input" placeholder="Search Smiley" />
          <img src="../assets/search_icon.png" className="nav-search-icon" alt="" />
        </div>
        <div className="nav-language">
          <img src="../assets/us_flag.png" width="25" alt="" />
          <p>US</p>
          <img src="../assets/dropdown_icon.png" width="8" alt="" />
        </div>
        <div className="nav-text">
          <Link to="/account">
            <h1>Your Account</h1>
          </Link>
        </div>
        <div className="nav-text">
          <h1>Help</h1>
        </div>
        <Link to="/cart" className="nav-cart">
          <img src="../assets/cart_icon.png" width="35" alt="" />
          <h4>Cart</h4>
        </Link>
      </nav>
      
      <div className="nav-bottom">
        {/* Navigation links */}
        <Link to="/all">All</Link>
        {/* Additional links */}
      </div>

      <div className="header-slider">
        {/* Header slider with images */}
      </div>

      <div className="deals-container">
        {/* Deals and products */}
      </div>
    </div>
  );
}

export default Clothing;
