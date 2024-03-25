import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Home Improvement', 'Groceries', 'Clothing']; // Add more categories as needed

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => setIsOpen(false);


  return (
    <nav className="navbar">
      <div className="top-section">
        <Link to="/" className="navbar-logo">
          <FontAwesomeIcon icon={faHome} size="2x" /> {/* Home icon as a button */}
        </Link>
        <div className="menu-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
       
      </div>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}> {/* Toggle 'show' class based on 'isOpen' state */}
        <Link to="/cart">Cart</Link>
          <Link to="/clothing">Clothing</Link>
          <Link to="/groceries">Groceries</Link>
          <Link to="/medical">Medical</Link>
          <Link to="/homeimprov">Home Improvement</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/youraccount">Your Account</Link>
          <Link to="/womens">Womens Clothing</Link>
          <button onClick={closeMenu} className="close-menu">Close</button>
        </div>
        </div>
      <div
className="nav-links">
{/* Links can be added here */}
<Link to="/youraccount">Your Account</Link>
<Link to="/help">Help</Link>
<Link to="/cart">Cart</Link>
</div>
</nav>
);
}

export default Navbar;