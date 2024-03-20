import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import smileyLogo from '../assets/smiley.svg';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Add specific icons to the library
library.add(faCheckSquare, faCoffee);

// Tell Font Awesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();


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
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <input type="text" className="nav-search-input" placeholder="Search Smiley" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="nav-language">
        <i className="fa-solid fa-flag-usa"></i>
          <p>US</p>
          <i class="fa-solid fa-caret-down"></i>
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
        <i class="fa-solid fa-cart-shopping"></i>
          <h4>Cart</h4>
        </Link>
      </nav>

      <div className="nav-bottom">
      <i class="fa-solid fa-bars"></i>
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
