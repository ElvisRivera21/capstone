
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/account">Your Account</Link>
      {/* Add more navigation links as needed */}
    </nav>
  );
}

export default Navbar;
