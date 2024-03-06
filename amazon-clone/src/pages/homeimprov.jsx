

const homeimprov = () => {
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
        <script src="./src/main.jsx"></script>

        <nav>
          <a href="/">
            <img src="./src/assets/smiley.svg" width="100" alt="logo" />
          </a>
          <div className="nav-country">
            <img src="./assets/location_icon.png" height="20" alt="" />
            <div>
              <p>Deliver to</p>
              <h1>United States</h1>
            </div>
          </div>
          {/* Add the remaining navigation elements here */}
        </nav>

        <div className="nav-bottom">
          <div>
            <img src="./assets/menu_icon.png" width="25px" alt="" />
          </div>
          <p><a href="home.html">All</a></p>
          {/* Add the rest of the bottom navigation links */}
        </div>

        <div className="header-slider">
          <ul>
            <img src="https://m.media-amazon.com/images/I/61qCI1mfDdL._SX3000_.jpg" className="header-image" alt="" />
          </ul>
        </div>

        {/* Add the deals-container and deal components here */}
      </body>
    </html>
  );
};

export default homeimprov;
