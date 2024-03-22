import React from 'react';
import './styles/index.css';
import AppRoutes from './Routes';
import smiley from './assets/smiley.svg'; // Import the image

// Then use it in your JSX
<img src={smiley} alt="Smiley" />


function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
