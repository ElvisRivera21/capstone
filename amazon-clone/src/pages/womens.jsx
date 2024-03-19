import React from 'react';
import '../styles/womens.css';


function ClothingPage() {
  return (
    <>
      <nav>
        <a href="/home">
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
        <a href="/cart" className="nav-cart">
          <img src="./assets/cart_icon.png" width="35px" alt="" />
          <h4>Cart</h4>
        </a>
      </nav>

      <div className="nav-bottom">
        <div>
          <img src="./assets/menu_icon.png" width="25px" alt="" />
        </div>
        {/* Dropdown menu omitted for brevity */}
      </div>

      <div className="header-slider">
        <img src="./assets/clothes.jpg" className="header-image" alt="Clothing Header" />
      </div>

      <div className="deals-container">
        {/* Example deal */}
        <div className="deal">
          <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width="300" alt="Crew Yellow Knit Sweater" />
          <h3>Crew Yellow Knit Sweater</h3>
          <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230" alt="Rating" />
          <p>$9.99</p>
          <a href="product1.jsx">Add To Cart</a>
        </div>
        {/* More deals omitted for brevity */}
      </div>
    </>
  );
}

export default ClothingPage;
