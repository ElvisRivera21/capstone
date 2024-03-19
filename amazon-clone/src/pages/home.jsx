import React from 'react';
import '../styles/home.css'; // Assuming your CSS is correctly located for webpack to bundle it.

function HomePage() {
  return (
    <div>
      <nav>
        <a href="./home.jsx">
          <img src="./assets/smiley.svg" width="100" alt="logo" />
        </a>
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
            <img src="./assets/dropdown_icon.png" height="12" alt="" />
          </div>
          <input type="text" className="nav-search-input" placeholder="Search Smiley" />
          <img src="./assets/search_icon.png" className="nav-search-icon" alt="" />
        </div>
        <div className="nav-language">
          <img src="./assets/us_flag.png" width="25" alt="" />
          <p>US</p>
          <img src="./assets/dropdown_icon.png" width="8" alt="" />
        </div>
        <div className="nav-text">
          <a href="youraccount.jsx">
            <h1>Your Account <img src="./assets/dropdown_icon.png" width="8" alt="" /></h1>
          </a>
        </div>
        <div className="nav-text">
          <h1>Help</h1>
        </div>
        <a href="" className="nav-cart">
          <img src="./assets/cart_icon.png" width="35" alt="" />
          <h4>Cart</h4>
        </a>
      </nav>

      <div className="nav-bottom">
        <img src="./assets/menu_icon.png" width="25" alt="" />
        <p><a href="home.jsx">All</a></p>
        {/* Continue with the rest of the links */}
      </div>

      {/* Slider */}
      <div className="header-slider-container">
        <div className="header-slider">
          <img src="https://m.media-amazon.com/images/I/61BYBnNSohL._SX3000_.jpg" className="header-image" alt="" />
        </div>
      </div>

      {/* Deals */}
      <div className="deals-container">
        {/* Deal 1 */}
        <div className="deal">
          <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width="300" alt="Deal 1" />
          <h4>Essentials Women's Classic-Fit Lightweight Cable Long-Sleeve Mock Neck Sweater</h4>
          <a href="clothing.jsx">Up to 37% off</a>
        </div>
        {/* More deals can be added in the same format */}
      </div>

      {/* Footer */}
      <div className="footer-items">
        {/* Footer content */}
      </div>
    </div>
  );
}

export default HomePage;
