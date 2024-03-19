import React from 'react';
import '../styles/homeimprov.css';

function HomeImprovementPage() {
  return (
    <>
      <nav>
        <a href="/">
          <img src="./assets/smiley.svg" width="100" alt="logo" />
        </a>
        <div className="nav-country">
          <img src="./assets/location_icon.png" height="20" alt="" />
          <div>
            <p> Deliver to</p>
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
          <a href="youraccount.jsx">
            <h1>Your Account <img src="./assets/dropdown_icon.png" width="8px" alt="" /></h1>
          </a>
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
        {/* More links */}
      </div>
      
      <div className="header-slider">
        <video controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="deals-container">
        {/* Deal 1 */}
        <div className="deal">
          <img src="https://m.media-amazon.com/images/I/51nBgQabKOL._AC_UL480_QL65_.jpg" width="300" alt="Deal 1" />
          <h3>Cinnado Security Camera Indoor</h3>
          <p><span>$9.99</span></p>
          <a href="product1.jsx">Add To Cart</a>
        </div>
        {/* More deals */}
      </div>
    </>
  );
}

export default HomeImprovementPage;
