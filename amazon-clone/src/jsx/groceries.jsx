var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="./src/assets/smiley.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Amazon Capstone</title>
          <link rel="stylesheet" href="./groceries.css" />
          <nav>
            <a href="./home.html">
              <img src="./assets/smiley.svg" width={100} alt="logo" />
            </a>
            <div className="nav-country">
              <img src="./assets/location_icon.png" height={20} alt="" />
              <div>
                <p> Deliver to</p>
                <h1>United States</h1>
              </div>
            </div>
            <div className="nav-search">
              <div className="nav-search-category">
                <p>All</p>
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
            <a href className="nav-cart">
              <img src="./assets/cart_icon.png" width="35px" alt="" />
              <h4>Cart</h4>
            </a>
          </nav>
          <div className="nav-bottom">
            <div>
              <img src="./assets/menu_icon.png" width="25px" alt="" /> 
              <p><a href="home.html">All</a></p>
            </div>
            <p><a href="clothing.html">Clothing</a></p>
            <p><a href="groceries.html">Groceries</a></p>
            <p><a href="medical.html">Medical</a></p>
            <p><a href="homeimprov.html">Home Improvement</a></p>
          </div>
          <div className="header-slider">
            <img src="https://mainlymiles.com/wp-content/uploads/2018/08/groceries-background-e1533097069889.jpg" className="header-image" />
          </div>
          <div className="deals-container">
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/71PK6BOLxCL._AC_UL480_FMwebp_QL65_.jpg" width={300} 1" />
              <h3>Crew Yellow Knit Sweater </h3>
              <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" />
              <p>$9.99 </p>
              <a href="product1.html">Add To Cart</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/81yIW-9KMuL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="Deal 2" />
              <h3>COMOWARE 20V Cordless Drill</h3>
              <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" />
              <p><span>$39.99</span></p>
              <a href="product2.html">Add To Cart</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/81kPv4GeqCL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="Deal 2" />
              <h3>Vitamin Power-c Electrolyte Enhanced water</h3>
              <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" />
              <p><span>$15.99</span></p>
              <a href="product2.html">Add To Cart</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/71jIwNp8QhL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="Deal 2" />
              <h3>COMOWARE 20V Cordless Drill</h3>
              <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" />
              <p><span>$9.99</span></p>
              <a href="product2.html">Add To Cart</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/71ITcq9-5yL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="Deal 2" />
              <h3>COMOWARE 20V Cordless Drill</h3>
              <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" />
              <p><span>$9.99</span></p>
              <a href="product2.html">Add To Cart</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/71aV0yFv5TL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="Deal 2" />
              <h3>COMOWARE 20V Cordless Drill</h3>
              <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" />
              <p><span>$9.99</span></p>
              <a href="product2.html">Add To Cart</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/61Q1IVmo00L._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="Deal 2" />
              <h3>COMOWARE 20V Cordless Drill</h3>
              <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" />
              <p><span>$9.99</span></p>
              <a href="product2.html">Add To Cart</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/81WHVSp9DbL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="Deal 2" />
              <h3>COMOWARE 20V Cordless Drill</h3>
              <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" />
              <p><span>$9.99</span></p>
              <a href="product2.html">Add To Cart</a>
            </div>
          </div>
        </div>
      );
    }
  });