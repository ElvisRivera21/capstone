import React from 'react';
import '../styles/clothing.css';

function clothing() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="./src/assets/smiley.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amazon Capstone</title>
        <link rel="stylesheet" href="./clothing.css" />
      </head>
      <body>
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
            <img src="assets/search_icon.png" className="nav-search-icon" alt="" />
          </div>
          <div className="nav-language">
            <img src="./assets/us_flag.png" width="25px" alt="" />
            <p>US</p>
            <img src="./assets/dropdown_icon.png" width="8px" alt="" />
          </div>
          <div className="nav-text">
            <h1>Your Account<img src="./assets/dropdown_icon.png" width="8px" alt="" /></h1>
          </div>
          <div className="nav-text">
            <h1>Help</h1>
          </div>
          <a href="" className="nav-cart">
            <img src="./assets/cart_icon.png" width="35px" alt="" />
            <h4>Cart</h4>
          </a>
        </nav>
        <div className="nav-bottom">
          <div>
            <img src="./assets/menu_icon.png" width="25px" alt="" />
          </div>
          <p><a href="home.jsx">All</a></p>
          <p><a href="clothing.jsx">Clothing</a></p>
          <p><a href="groceries.jsx">Groceries</a></p>
          <p><a href="medical.jsx">Medical</a></p>
          <p><a href="homeimprov.jsx">Home Improvement</a></p>
        </div>
        <div className="header-slider">
          <ul>
            <img src="./assets/clothes.jpg" className="header-image" />
          </ul>
        </div>
        <div className="deals-container">
          <div className="deal">
            {/* Deal content */}
          </div>
          {/* More deals */}
        </div>
      </body>
    </html>
  );
}

export default clothing;
