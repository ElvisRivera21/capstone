import { Link } from 'react-router-dom';
import '../styles/index.css';
function Navbar() {
  return (
    <nav style={{ padding: '20px', background: '#f0f0f0' }}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/clothing">Clothing</Link></li>
        <li><Link to="/groceries">Groceries</Link></li>
        <li><Link to="/homeImprovements">Home Improvements</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/medical">Medical</Link></li>
        <li><Link to="/womens">Womens</Link></li>
        <li><Link to="/account">Your Account</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
