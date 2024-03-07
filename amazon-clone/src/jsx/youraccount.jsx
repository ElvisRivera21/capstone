var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Amazon Sign In</title>
          <link rel="stylesheet" href="./src/youraccount.css" />
          <img src="./src/assets/smiley.svg" width="200px" alt="Amazon.com" />
          <div id="signInBorder">
            <p id="SignInTxt">
              Sign in
            </p>
            <label>
              <strong>Email (phone for mobile accounts)</strong>
              <br />
              <input type="email" name="email" defaultValue />
            </label>
            <br />
            <label>
              <strong>Password</strong>
              <span><a href="#" id="password">Forgot your password?</a></span>
              <br />
              <input type="password" name="password" defaultValue />
            </label>
            <div>
              <a href="home.html">
                <button id="smiley">Sign in</button>
              </a>
            </div>
            <div id="createAccount">
              <h2><span>New to Smiley?</span></h2>
              <button id="newAccount" name="newAcct">Create your Smiley account</button>
            </div>
          </div>
          <hr id="footer" />
          <div className="extra">
            <p className="links"><a href="#" id="first">Conditions of Use</a>
              <a href="#">Notice of Use</a>
              <a href="#">Help</a></p>
            <p className="links" id="special">
              © 2023-2024
            </p>
          </div>
        </div>
      );
    }
  });