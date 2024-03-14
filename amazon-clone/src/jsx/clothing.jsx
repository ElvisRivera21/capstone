var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="./src/assets/smiley.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amazon Capstone</title>
        <link rel="stylesheet" href="./clothing.css" />
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
              <img src="./assets/dropdown_icon.png" height={12} alt="" />
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
          </div>
          <p><a href="home.html">All</a></p>
          <p><a href="clothing.html">Clothing</a></p>
          <p><a href="groceries.html">Groceries</a></p>
          <p><a href="medical.html">Medical</a></p>
          <p><a href="homeimprov.html">Home Improvement</a></p>
        </div>
        <div className="header-slider">
          <ul>
            <img src="./assets/clothes.jpg" className="header-image" />
          </ul></div>
        <div className="deals-container">
          <div className="deal">
            <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width={300} 1" />
            <h3>Crew Yellow Knit Sweater </h3>
            <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="150px" />
            <p>$9.99 </p>
            <a href="product1.html">Add To Cart</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/71POTE5ekqL._AC_SX385_.jpg" width={300} alt="placeholder" />
            <h3>Short Sleeve Polo Shirt, Midweight Men's Shirt</h3>
            <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="150px" />
            <p><span>$39.99</span></p>
            <a href="product2.html">Add To Cart</a>
          </div>
          <div className="deal">
            <img src="https://assets.orvis.com/is/image/orvisprd/3EAG03F22_W?wid=768&src=is($object$:1-1)" width={300} alt="placeholder" />
            <h3> Mens Long Sleeve Knit Polo Shirts Casual Lightweight Collared Sweater</h3>
            <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="150px" />
            <p><span>$15.99</span></p>
            <a href="product2.html">Add To Cart</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/91kwcI4sJXL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="placeholder" />
            <h3> Mens Shirts Short Sleeve Button Cotton T-Shirt with Pocket</h3>
            <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="150px" />
            <p><span>$21.99</span></p>
            <a href="product2.html">Add To Cart</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/71UfcuydHKL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="placeholder" />
            <h3>Wrangler Men's Iconic Denim Regular Fit Snap Shirt</h3>
            <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="150px" />
            <p><span>$30.99</span></p>
            <a href="product2.html">Add To Cart</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/51McpgpVz5L._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="placeholder" />
            <h3>Under Armour Men's New Freedom Flag T-Shirt</h3>
            <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="150px" />
            <p><span>$15.99</span></p>
            <a href="product2.html">Add To Cart</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/614m5qa6VBL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="placeholder" />
            <h3>Men's Graphic Tees Vintage T-Shirts Floral Letter Print Crewneck Short Sleeve T Shirts Casual</h3>
            <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="150px" />
            <p><span>$9.99</span></p>
            <a href="product2.html">Add To Cart</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/912avsuBEdL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="placeholder" />
            <h3>MAGCOMSEN Men's Shirts 1/4 Zip Fleece Pullover Mid-Weight Long Sleeve Sweatshirts Athletic Shirts</h3>
            <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="150px" />
            <p><span>$49.99</span></p>
            <a href="product2.html">Add To Cart</a>
          </div>
        </div>
      </div>
    );
  }
});