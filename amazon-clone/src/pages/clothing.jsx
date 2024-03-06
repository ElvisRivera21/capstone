

function clothing() {
    return (
        <>
            <head>
                <meta charset="UTF-8"/>
                <link rel="icon" type="image/svg+xml" href="./src/assets/smiley.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Amazon Capstone</title>
                <link rel="stylesheet" href="./src/clothing.css"/>
            </head>
            <body>
                <script src="./src/main.jsx"></script>

                <nav>
                    <a href="./home.html">
                        <img src="./src/assets/smiley.svg" width="100" alt="logo"/>
                    </a>
                    <div className="nav-country">
                        <img src="./assets/location_icon.png" height="20" alt=""/>
                        <div>
                            <p>Deliver to</p>
                            <h1>United States</h1>
                        </div>
                    </div>
                    <div className="nav-search">
                        <div className="nav-search-category">
                            <p>All</p>
                            <img src="./assets/dropdown_icon.png" height="12" alt=""/>
                        </div>
                        <input type="text" className="nav-search-input" placeholder="Search Smiley"/>
                        <img src="./assets/search_icon.png" className="nav-search-icon" alt=""/>
                    </div>
                    <div className="nav-language">
                        <img src="./assets/us_flag.png" width="25px" alt=""/>
                        <p>US</p>
                        <img src="./assets/dropdown_icon.png" width="8px" alt=""/>
                    </div>
                    <div className="nav-text">
                        <h1>Your Account<img src="./assets/dropdown_icon.png" width="8px" alt=""/></h1>
                    </div>
                    <div className="nav-text">
                        <h1>Help</h1>
                    </div>
                    <a href="#" className="nav-cart">
                        <img src="./assets/cart_icon.png" width="35px" alt=""/>
                        <h4>Cart</h4>
                    </a>
                </nav>

                <div className="nav-bottom">
                    <div>
                        <img src="./assets/menu_icon.png" width="25px" alt=""/>
                    </div>
                    <div className="dropdown">
                        <p><a href="home.html">All</a></p>
                    </div>
                    <p><a href="clothing.html">Clothing</a></p>
                    <p><a href="groceries.html">Groceries</a></p>
                    <p><a href="medical.html">Medical</a></p>
                    <p><a href="homeimprov.html">Home Improvement</a></p>
                </div>

                <div className="header-slider">
                    <ul>
                        <img src="./src/assets/clothes.jpg" className="header-image" alt=""/>
                    </ul>
                </div>

                <div className="deals-container">
                    <div className="deal">
                        <img src="https://cdnc.lystit.com/photos/d5ab-2015/11/18/jcrew-bright-lemon-perfect-cable-sweater-yellow-product-0-207364279-normal.jpeg" width="300" alt="Deal 1"/>
                        <h3>Crew Yellow Knit Sweater</h3>
                        <img src="https://3.bp.blogspot.com/-DT-3McVrkos/UaaftSIFAdI/AAAAAAAABx4/7j2yOBQ-IP4/s1600/3-stars-out-of-5.png" width="230px" alt=""/>
                        <p>$9.99</p>
                        <a href="product1.html">Add To Cart</a>
                    </div>
                    {/* Repeat similar structures for other deal items */}
                </div>
            </body>
        </>
    );
}

export default clothing;