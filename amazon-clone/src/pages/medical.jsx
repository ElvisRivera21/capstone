import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for SPA navigation
import '../styles/index.css';

function MedicalPage() {
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
            <img src="./assets/dropdown_icon.png" height="12" alt="" />
          </div>
          <input type="text" className="nav-search-input" placeholder="Search Smiley" />
          <img src="./assets/search_icon.png" className="nav-search-icon" alt="" />
        </div>
        <div className="nav-language">
          <img src="./assets/us_flag.png" width="25px" alt="" />
          <p>US</p>
          <img src="./assets/dropdown_icon.png" width="8px" alt="" />
        </div>
        <div className="nav-text">
          <Link to="/youraccount">
            <h1>Your Account</h1>
          </Link>
          <img src="./assets/dropdown_icon.png" width="8px" alt="" />
        </div>
        <div className="nav-text">
          <h1>Help</h1>
        </div>
        <Link to="/cart" className="nav-cart">
          <img src="./assets/cart_icon.png" width="35px" alt="" />
          <h4>Cart</h4>
        </Link>
      </nav>

      <div className="nav-bottom">
        <div>
          <img src="./assets/menu_icon.png" width="25px" alt="" />
        </div>
        <Link to="/home">All</Link>
        {/* More links... */}
      </div>
      
      <div className="header-slider">
        <img src="https://m.media-amazon.com/images/G/01/HST/Hornbill/LandingPage/desktop-image-aModernApproach-2x.jpg" alt="" />
      </div>
      
      <div className="deals-container">
        <div className="deal">
          <img src="https://m.media-amazon.com/images/I/61UIBbNQb0L._AC_UY327_FMwebp_QL65_.jpg" width="300" alt="" />
          <h3>Fingertip Pulse Oximeter</h3>
          <p><span>$9.99</span></p>
          <Link to="/product1">View Deal</Link>
        </div>
        {/* More deals... */}
      </div>
    </div>
  );
}

export default MedicalPage;
