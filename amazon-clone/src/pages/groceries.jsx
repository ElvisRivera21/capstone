

const groceries = () => {
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
        {/* Include your React components or logic here if needed */}
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
            </div>
            <input type="text" className="nav-search-input" placeholder="Search Smiley" />
            <img src="assets/search_icon.png" className="nav-search-icon" alt="" />
          </div>
          {/* Add the rest of the navigation elements here */}
        </nav>
        
        <div className="nav-bottom">
          {/* Add the bottom navigation links here */}
        </div>
        
        <div className="header-slider">
          <img src="https://mainlymiles.com/wp-content/uploads/2018/08/groceries-background-e1533097069889.jpg" className="header-image" />
        </div>
        
        <div className="deals-container">
          {/* Add the deal cards here */}
        </div>
      </body>
    </html>
  )
};

export default groceries;
