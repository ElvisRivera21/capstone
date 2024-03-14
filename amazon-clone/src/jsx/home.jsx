var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="./src/assets/smiley.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Smiley Capstone</title>
          <link rel="stylesheet" href="./home.css" />
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
                <a href="./home.html" />
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
              <a href="youraccount.html">
                <h1>Your Account<img src="./assets/dropdown_icon.png" width="8px" alt="" /></h1>
              </a>
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
          <div className="header-slider-container">
            <div className="header-slider">
              <img src="https://m.media-amazon.com/images/I/61BYBnNSohL._SX3000_.jpg" className="header-image" />
            </div>
          </div>
          <div className="trending-deals">
          </div>
          <div className="deals-container">
            <div className="deal">
              <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width={300} 1" />
              <h4> Essentials Women's Classic-Fit Lightweight Cable Long-Sleeve Mock Neck Sweater</h4>
              <a href="clothing.html">Up to 37% off</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/71jjExaKxpL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="placeholder1" />
              <h4>COMOWARE 20V Cordless Drill, Electric Power Drill Set with 1 Battery &amp; Charger, 3/8” Keyless Chuck, 2 Variable Speed, 266 In-lb Torque, 25+1 Position and 34pcs Drill/Driver Bits</h4>
              <p><span /></p>
              <a href="homeimprov.html">Up to 20% off</a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/81GTm5K1ZXL._AC_UL480_FMwebp_QL65_.jpg" width={300} alt="placeholder2" />
              <h4>vitaminwater power-c electrolyte enhanced water w/ vitamins, dragonfruit drinks, 20 fl oz, 12 Pack</h4>
              <p><span /></p>
              <a href="groceries.html">Up to 57% off </a>
            </div>
            <div className="deal">
              <img src="https://m.media-amazon.com/images/I/718TJdWTfBL._AC_UY327_FMwebp_QL65_.jpg" width={300} alt="placeholder3" />
              <h4>First Aid Only 91248 OSHA-Compliant All-Purpose 50-Person Emergency First Aid Kit for Home, Work, and Travel, 260 Pieces</h4>
              <p><span /></p>
              <a href="medical.html">Up to 10% off</a>
            </div>
          </div>
        </div>
      );
    }
  });