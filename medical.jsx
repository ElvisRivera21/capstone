

function medical() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="./src/assets/smiley.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Amazon Capstone</title>
                <link rel="stylesheet" href="./src/home.css" />
            </head>
            <body>
                <script src="./src/main.jsx"></script>

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
                    <p><a href="home.html">All</a></p>
                    <p><a href="clothing.html">Clothing</a></p>
                    <p><a href="groceries.html">Groceries</a></p>
                    <p><a href="medical.html">Medical</a></p>
                    <p><a href="homeimprov.html">Home Improvement</a></p>
                </div>
                <div className="header-slider">
                    <ul>
                        <li><img src="https://m.media-amazon.com/images/I/61qCI1mfDdL._SX3000_.jpg" className="header-image" /></li>
                    </ul>
                </div>
                <div className="deals-container"></div>
                <div className="deal">
                    <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width="300" alt="Deal 1" />
                    <h3>Crew Yellow Knit Sweater</h3>
                    <p><span>$9.99</span></p>
                    <a href="product1.html">View Deal</a>
                </div>
                <div className="deal">
                    <img src="https://m.media-amazon.com/images/I/71jjExaKxpL._AC_UL480_FMwebp_QL65_.jpg" width="300" alt="Deal 2" />
                    <h3>COMOWARE 20V Cordless Drill</h3>
                    <p><span>$39.99</span></p>
                    <a href="product2.html">View Deal</a>
                </div>
                <div className="deal">
                    <img src="https://m.media-amazon.com/images/I/81GTm5K1ZXL._AC_UL480_FMwebp_QL65_.jpg" width="300" alt="Deal 3" />
                    <h3>Vitamin Power-c Electrolyte Enhanced water</h3>
                    <p><span>$15.99</span></p>
                    <a href="product3.html">View Deal</a>
                </div>
                <div className="deal">
                    <img src="https://m.media-amazon.com/images/I/718TJdWTfBL._AC_UY327_FMwebp_QL65_.jpg" width="300" alt="Deal 4" />
                    <h3>COMOWARE 20V Cordless Drill</h3>
                    <p><span>$9.99</span></p>
                    <a href="product4.html">View Deal</a>
                </div>
            </body>
        </html>
    );
}

export default medical;
