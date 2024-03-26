const home = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="./src/assets/smiley.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amazon Capstone</title>
        <link rel="stylesheet" href="./src/home.css" />
      </head>
      <body>
        <script src="./src/App.jsx"></script>
      
        <nav>
          <a href="./home.html">
            <img src="./src/assets/smiley.svg" width="100" alt="logo" />
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
              <a href="./home.html"></a>
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
            <a href="youraccount.html">
              <h1>Your Account<img src="./assets/dropdown_icon.png" width="8px" alt="" /></h1>
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
          <p><a href="home.html">All</a></p>
          <p><a href="clothing.html">Clothing</a></p>
          <p><a href="groceries.html">Groceries</a></p>
          <p><a href="medical.html">Medical</a></p>
          <p><a href="homeimprov.html">Home Improvement</a></p>
        </div>
        <div className="header-slider-container">
          <div className="header-slider">
            <img src="https://m.media-amazon.com/images/I/61qCI1mfDdL._SX3000_.jpg" className="header-image" />
          </div>
        </div>
      
        <div className="trending-deals"></div>
      
        <div className="deals-container">
          <div className="deal">
            <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width="300" />
            <h4>Amazon Essentials Women&aposs Classic-Fit Lightweight Cable Long-Sleeve Mock Neck Sweater</h4>
            <a href="clothing.html">Up to 37% off</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/71jjExaKxpL._AC_UL480_FMwebp_QL65_.jpg" width="300" alt="Deal 2" />
            <h4>COMOWARE 20V Cordless Drill, Electric Power Drill Set with 1 Battery & Charger, 3/8” Keyless Chuck, 2 Variable Speed, 266 In-lb Torque, 25+1 Position and 34pcs Drill/Driver Bits</h4>
            <p><span></span></p>
            <a href="homeimprov.html">Up to 20% off</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/81GTm5K1ZXL._AC_UL480_FMwebp_QL65_.jpg" width="300" alt="Deal 2" />
            <h4>vitaminwater power-c electrolyte enhanced water w/ vitamins, dragonfruit drinks, 20 fl oz, 12 Pack</h4>
            <p><span></span></p>
            <a href="groceries.html">Up to 57% off</a>
          </div>
          <div className="deal">
            <img src="https://m.media-amazon.com/images/I/718TJdWTfBL._AC_UY327_FMwebp_QL65_.jpg" width="300" alt="Deal 2" />
            <h4>First Aid Only 91248 OSHA-Compliant All-Purpose 50-Person Emergency First Aid Kit for Home, Work, and Travel, 260 Pieces</h4>
            <p><span></span></p>
            <a href="medical.html">Up to 10% off</a>
          </div>
        </div>
      
        <div className="footer-items">
          <ul>
            <h3>Get to Know Us</h3>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Accesibility</a></li>
            <li><a href="#">Smiley Science</a></li>
          </ul>
          <ul>
            <h3>Connect with Us</h3>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
          <ul>
            <h3>Make Money with Us</h3>
            <li><a href="#">Sell on Smiley</a></li>
            <li><a href="#">Start a Package Deliver Business</a></li>
            <li><a href="#">Protect and Build Your Brand</a></li>
            <li><a href="#">Smiley Global Selling</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Fulfillment by Smiley</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Smiley Pay on Merchants</a></li>
          </ul>
          <ul>
            <h3>Let Us Help You</h3>
            <li><a href="#">COVID-19 and Smiley</a></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Smiley App Download</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </body>
    </html>
  );
}

export default home;