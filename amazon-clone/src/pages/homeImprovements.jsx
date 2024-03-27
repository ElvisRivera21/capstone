import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/index.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Add specific icons to the library
library.add(faCheckSquare, faCoffee);

// Tell Font Awesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();

function HomeImprovementPage() {
  return (
    <div>
      <nav>
        <Link to="/">
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
            <h1>Your Account <i class="fa-solid fa-caret-down"></i></h1>
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
        <div>
        <i class="fa-solid fa-bars"></i>
        </div>
        <p><Link to="/home">All</Link></p>
        {/* More links using <Link> */}
      </div>
      
      <div className="header-slider">
        <video controls>
          {/* Ensure you have a valid source */}
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="deals-container">
        {/* Deal 1 */}
        <div className="deal">
          <img src="https://m.media-amazon.com/images/I/51nBgQabKOL._AC_UL480_QL65_.jpg" width="300" alt="Deal 1" />
          <h3>Cinnado Security Camera Indoor</h3>
          <p><span>$9.99</span></p>
          <Link to="/product1">Add To Cart</Link>
        </div>
        {/* More deals */}
        <div class="deal"> <img src="https://m.media-amazon.com/images/I/71jjExaKxpL._AC_UL480_FMwebp_QL65_.jpg"
                width="300" alt="placeholder1" />
            <h4>COMOWARE 20V Cordless Drill, Electric Power Drill Set with 1 Battery & Charger, 3/8” Keyless Chuck, 2
                Variable Speed, 266 In-lb Torque, 25+1 Position and 34pcs Drill/Driver Bits</h4>
            <p><span></span></p><p>Up to 20% off</p>
      </div>
    </div>
    </div>
  );
}

export default HomeImprovementPage;
