import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

// Ensure these paths are correct relative to this file
import smileyLogo from '../assets/smiley.svg';
import locationIcon from '../assets/location_icon.png';
import dropdownIcon from '../assets/dropdown_icon.png';
import usFlag from '../assets/us_flag.png';
import searchIcon from '../assets/search_icon.png';
import cartIcon from '../assets/cart_icon.png';
import menuIcon from '../assets/menu_icon.png';

function HomePage() {
  return (
    <div>
      <nav>
        <Link to="/home">
          <img src={smileyLogo} width="100" alt="logo" />
        </Link>
        <div className="nav-country">
          <img src={locationIcon} height="20" alt="" />
          <div>
            <p>Deliver to</p>
            <h1>United States</h1>
          </div>
        </div>
        <div className="nav-search">
          <div className="nav-search-category">
            <p>All</p>
            <img src={dropdownIcon} height="12" alt="" />
          </div>
          <input type="text" className="nav-search-input" placeholder="Search Smiley" />
          <img src={searchIcon} className="nav-search-icon" alt="" />
        </div>
        <div className="nav-language">
          <img src={usFlag} width="25" alt="" />
          <p>US</p>
          <img src={dropdownIcon} width="8" alt="" />
        </div>
        <div className="nav-text">
          <Link to="/youraccount">
            <h1>Your Account <img src={dropdownIcon} width="8" alt="" /></h1>
          </Link>
        </div>
        <div className="nav-text">
          <h1>Help</h1>
        </div>
        <Link to="/cart" className="nav-cart">
          <img src={cartIcon} width="35" alt="" />
          <h4>Cart</h4>
        </Link>
      </nav>

      <div className="nav-bottom">
        <img src={menuIcon} width="25" alt="" />
        <Link to="/home">All</Link>
        <Link to="/clothing">Clothing</Link>
        <Link to="/groceries">Groceries</Link>
        <Link to="/medical">Medical</Link>
        <Link to="/homeimprov">Home Improvement</Link>
      </div>

      <div className="header-slider-container">
        <div className="header-slider">
          {/* Use the URL directly for external images */}
          <img src="https://m.media-amazon.com/images/I/61BYBnNSohL._SX3000_.jpg" className="header-image" alt="" />
        </div>
      </div>

      <div className="deals-container">
        <div className="deal">
          <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width="300" alt="Deal 1" />
          <h4>Essentials Women's Classic-Fit Lightweight Cable Long-Sleeve Mock Neck Sweater</h4>
          <Link to="/clothing">Up to 37% off</Link>
        </div>
        {/* Add more deals in similar format */}
      </div>

      <div className="footer-items">
        {/* Footer Content Here */}
      </div>
    </div>
  );
}

export default HomePage;
