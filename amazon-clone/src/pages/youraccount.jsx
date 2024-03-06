

function account() {
  return (
    <>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Smiley Sign In</title>
          <link rel="stylesheet" href="./youraccount.css" />
        </head>
        <body>
          <img src="../assets/smiley.svg" width="200px" alt="Amazon.com" />

          <div id="signInBorder">
            <p id="SignInTxt">Sign in</p>

            <label>
              <strong>Email (phone for mobile accounts)</strong>
              <br />
              <input type="email" name="email" value="" />
            </label>

            <br />

            <label>
              <strong>Password</strong>
              <span>
                <a href="#" id="password">Forgot your password?</a>
              </span>
              <br />
              <input type="password" name="password" value="" />
            </label>

            <div>
              <a href="/home.html">
                <button id="smiley">Sign in</button>
              </a>
            </div>

            <div id="createAccount">
              <h2>
                <span>New to Smiley?</span>
              </h2>
              <button id="newAccount" name="newAcct">
                Create your Smiley account
              </button>
            </div>
          </div>

          <hr id="footer" />

          <div className="extra">
            <p className="links">
              <a href="#" id="first">
                Conditions of Use
              </a>{' '}
              <a href="#">Notice of Use</a> <a href="#">Help</a>
            </p>
            <p className="links" id="special">
              © 2023-2024
            </p>
          </div>

          <script src="/src/db/login.js" />
          <script type="module" src="/src/main.jsx" />
        </body>
      </html>
    </>
  );
}

export default account;
