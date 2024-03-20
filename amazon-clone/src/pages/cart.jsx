import React, { useState } from 'react';
import '../styles/index.css';
import smiley from '../assets/smiley.svg'; // Import the image

// Then use it in your JSX
<img src={smiley} alt="Smiley" />


const Cart = () => {
  // Let's assume you have an initial state for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add new item to the cart
  const addNewItem = (itemData) => {
    // Create a new item with unique id
    const newItem = {
      id: Math.random(), // In real app, you'd want a more reliable way to generate unique IDs
      ...itemData
    };

    // Update state with new item added
    setCartItems([...cartItems, newItem]);
  };

  // Function to remove an item from the cart
  const removeItem = (itemId) => {
    // Filter out the item to be removed
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);

    // Update state with the item removed
    setCartItems(updatedCartItems);
  };

  // UI rendering for the cart, including add and remove buttons
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Example buttons to add items */}
      <button onClick={() => addNewItem({ name: 'T-shirt', price: 20 })}>Add T-shirt</button>
      <button onClick={() => addNewItem({ name: 'Pants', price: 40 })}>Add Pants</button>
    </div>
  );
};

export default Cart;
