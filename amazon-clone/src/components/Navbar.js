import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import AppRoutes from '../Routes.jsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    setIsOpen(!isOpen);
    event.stopPropagation(); // Prevent event from propagating to parent elements
  };

  // Handle key presses for accessibility
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown();
    }
  };
//Onclick Function toggleDropdown
  return (
    <nav style={{ padding: '20px', background: '#f0f0f0' }}>
      <div
        onClick={(event) => toggleDropdown(event)} // Pass the event to toggleDropdown
        onKeyDown={handleKeyDown}
        style={{ cursor: 'pointer' }}
        tabIndex="0" // Make the div focusable
        role="button" // Indicate that the div is a button
        aria-expanded={isOpen} // Accessibility for screen readers
      >
        <i className="fas fa-bars"></i> {/* FontAwesome icon for the menu */}
      </div>

      {isOpen && (
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      )}
    </nav>
  );
}

export default Navbar;