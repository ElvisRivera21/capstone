import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for SPA navigation
import '../styles/index.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Add specific icons to the library
library.add(faCheckSquare, faCoffee);

// Tell Font Awesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();

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

      <div className="nav-bottom">
        <div>
        <i class="fa-solid fa-bars"></i>
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
        {/* More deals... */}
        <div class="deal"> <img src="https://m.media-amazon.com/images/I/718TJdWTfBL._AC_UY327_FMwebp_QL65_.jpg"
                width="300" alt="placeholder3" />
            <h4>First Aid Only 91248 OSHA-Compliant All-Purpose 50-Person Emergency First Aid Kit for Home, Work, and
                Travel, 260 Pieces</h4>
        </div>
      </div>
    </div>
  </div>
  );
}

export default MedicalPage;
