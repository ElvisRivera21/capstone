import { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importing useHistory
import '../styles/youraccount.css';
import smileyImage from '../../public/smiley.svg';

const StaticAccountComponent = () => {
  const [showLogin, setShowLogin] = useState(false);
  const history = useHistory(); // Initializing useHistory

  const toggleLogin = () => setShowLogin(!showLogin);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Navigate to home page upon sign in
    history.push('/home');
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Navigate to account creation page
    history.push('/create-account');
  };

  return (
    <div className='account'>
      <button onClick={toggleLogin}>Sign In / Create Account</button>
      {showLogin && (
        <div>
          <img src={smileyImage} width="200px" alt="Smiley Logo" />
          <div id="signInBorder">
            <p id="SignInTxt">Sign in</p>
            <form onSubmit={handleSignIn}> {/* Update form with onSubmit */}
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
              <button id="newAccount" name="newAcct" onClick={handleCreateAccount}> {/* Add onClick handler */}
                Create your Smiley account
              </button>
            </div>
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
      )}
    </div>
  );
};

export default StaticAccountComponent;