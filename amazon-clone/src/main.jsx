import React from 'react';
import ReactDOM from 'react-dom/client'; // Import client from react-dom for React 18
import './styles/index.css'; // Include your CSS
import App from './App';
// Remove the import of smiley if you're not using it directly

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Ensure the root element is present
if (rootElement) {
  // Create a root
/*   const root = ReactDOM.createRoot(rootElement); */

  // Initial render
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
