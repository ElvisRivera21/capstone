import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/groceries.css';
import smileyLogo from '../assets/smiley.svg'; // Ensure the path is correct
import locationIcon from '../assets/location_icon.png';
import searchIcon from '../assets/search_icon.png';
import usFlag from '../assets/us_flag.png';
import dropdownIcon from '../assets/dropdown_icon.png';
import cartIcon from '../assets/cart_icon.png';
// Add paths for any other assets you're using

function GroceriesPage() {
  return (
    <>
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
          <img src={usFlag} width="25px" alt="" />
          <p>US</p>
          <img src={dropdownIcon} width="8px" alt="" />
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
          <img src={cartIcon} width="35px" alt="" />
          <h4>Cart</h4>
        </Link>
      </nav>

      <div className="nav-bottom">
        <img src="../assets/menu_icon.png" width="25px" alt="" />
        {/* Repeat for each navigation item as needed */}
      </div>

      <div className="header-slider">
        <img src="https://mainlymiles.com/wp-content/uploads/2018/08/groceries-background-e1533097069889.jpg" className="header-image" alt="Groceries background" />
      </div>

      <div className="deals-container">
        {/* Example deal */}
        <div className="deal">
          <img src="https://m.media-amazon.com/images/I/71PK6BOLxCL._AC_UL480_FMwebp_QL65_.jpg" width="300" alt="Deal 1" />
          <h3>Product Name Here</h3>
          <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" alt="Rating" />
          <p>$9.99</p>
          <Link to="/product1">Add To Cart</Link>
        </div>
        {/* Add more deals here */}
      </div>
    </>
  );
}

export default GroceriesPage;
