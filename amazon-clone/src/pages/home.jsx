import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import smileyLogo from '../assets/smiley.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faCaretDown, faMagnifyingGlass, faFlagUsa, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the dropdown menu

  // Function to toggle the dropdown menu's visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav>
        <Link to="/home">
          <img src={smileyLogo} width="100" alt="Smiley Logo" />
        </Link>
        <div className="nav-country">
          <FontAwesomeIcon icon={faLocationCrosshairs} />
          <div>
            <p>Deliver to</p>
            <h1>United States</h1>
          </div>
        </div>
        <div className="nav-search">
          <div className="nav-search-category">
            <p>All</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <input type="text" className="nav-search-input" placeholder="Search Smiley" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="nav-language">
          <FontAwesomeIcon icon={faFlagUsa} />
          <p>US</p>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className="nav-text">
          <Link to="/youraccount">
            Your Account <FontAwesomeIcon icon={faCaretDown} />
          </Link>
        </div>
        <div className="nav-text">
          <h1>Help</h1>
        </div>
        <Link to="/cart" className="nav-cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <h4>Cart</h4>
        </Link>
      </nav>

      <div className="header-slider-container">
        <img src="https://m.media-amazon.com/images/I/61BYBnNSohL._SX3000_.jpg" className="header-image" alt="Header Banner" />
      </div>

      {/* Example Deal Section */}
      <div className="deals-container">
        <div className="deal">
          <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width="300" alt="Deal 1" />
          <h4>Essentials Women's Classic-Fit Lightweight Cable Long-Sleeve Mock Neck Sweater</h4>
          <Link to="/clothing">Up to 37% off</Link>
        </div>
        {/* Add more deals in a similar format */}
      </div>

      {/* Footer Section */}
      <div className="footer-items">
        {/* Footer content */}
      </div>
    </div>
  );
}

export default HomePage;
