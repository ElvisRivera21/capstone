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
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <input type="text" className="nav-search-input" placeholder="Search Smiley" />
          <img src="../assets/search_icon.png" className="nav-search-icon" alt="" />
        </div>
        <div className="nav-language">
          <img src="../assets/us_flag.png" width="25" alt="" />
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
      
 {/*      <div className="nav-bottom">
        <Link to="/all">All</Link>
      </div> */}

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
