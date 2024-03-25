import React from 'react';
import { Link } from 'react-router-dom'; // For SPA navigation
import '../styles/index.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Add specific icons to the library
library.add(faCheckSquare, faCoffee);

// Tell Font Awesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();

function WomensPage() {
  return (
    <div>
      <nav>
        <Link to="/home">
          <img src="./assets/smiley.svg" width="100" alt="logo" />
        </Link>
        <div className="nav-country">
          <img src="./assets/location_icon.png" height="20" alt="" />
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
          <img src="./assets/search_icon.png" className="nav-search-icon" alt="" />
        </div>
        <div className="nav-language">
          <img src="./assets/us_flag.png" width="25px" alt="" />
          <p>US</p>
          <i class="fa-solid fa-caret-down"></i>
        </div>
        <div className="nav-text">
          <Link to="/youraccount">
            <h1>Your Account</h1>
          </Link>
          <i class="fa-solid fa-caret-down"></i>
        </div>
        <div className="nav-text">
          <h1>Help</h1>
        </div>
        <Link to="/cart" className="nav-cart">
        <i class="fa-solid fa-cart-shopping"></i>
          <h4>Cart</h4>
        </Link>
      </nav>

      <div className="header-slider">
        <img src="./assets/clothes.jpg" className="header-image" alt="Clothing Header" />
      </div>

      <div className="deals-container">
        <div className="deal">
          <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width="300" alt="Crew Yellow Knit Sweater" />
          <h3>Crew Yellow Knit Sweater</h3>
          <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230" alt="Rating" />
          <p>$9.99</p>
          <Link to="product1">Add To Cart</Link>
        </div>
        {/* Additional deals */}
      </div>
    </div>
  );
}

export default WomensPage;
