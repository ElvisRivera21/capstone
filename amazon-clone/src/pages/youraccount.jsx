/* import { useHistory } from 'react-router-dom'; */
import '../styles/index.css';
import smileyImage from '../../public/smiley.svg'; 
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// Add specific icons to the library
library.add(faCheckSquare, faCoffee);

// Tell Font Awesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();

function Account() {
  let history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    history.push('/');
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Navigate to account creation page
    history.push('/youraccount');
  };

  // Handler for navigating back to the home page
  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <div>
      <img src={smileyImage} width="200px" alt="Smiley Logo" />
      <div className="nav-text">
    <div className="account">
        <h1>Your Account<i class="fa-solid fa-caret-down"></i></h1>
</div>
</div>
      <div id="signInBorder">
        <p id="SignInTxt">Sign in</p>

        <form onSubmit={handleSignIn}>
          <label>
            <strong>Email (phone for mobile accounts)</strong>
            <br />
            <input type="email" name="email" required />
          </label>
          <br />

          <label>
            <strong>Password</strong>
            <span><a href="#" id="password">Forgot your password?</a></span>
            <br />
            <input type="password" name="password" required />
          </label>
          <br />

          <button type="submit" id="smiley">Sign in</button>
        </form>

        <div id="createAccount">
          <h2><span>New to Smiley?</span></h2>
          <button id="newAccount" name="newAcct" onClick={handleCreateAccount}>
            Create your Smiley account
          </button>
        </div>

        {/* New Back to Home button */}
        <button onClick={handleBackToHome} style={{marginTop: "20px"}}>Back to Home</button>
      </div>

      <hr id="footer" />

      <div className="extra">
        <p className="links">
          <a href="#" id="first">Conditions of Use</a>
          <a href="#">Notice of Use</a>
          <a href="#">Help</a>
        </p>
        <p className="links" id="special">© 2023-2024</p>
      </div>
    </div>
  );
}

export default Account;
