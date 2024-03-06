import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart.jsx/index.js';
import Clothing from './pages/clothing.jsx';
import Groceries from './pages/groceries.jsx/index.js';
import Home from './pages/home.jsx/index.js';
import HomeImprovements from './pages/homeImprovements.html';
import Kids from './pages/kids.jsx/index.js';
import Medical from './pages/medical.jsx/index.js';
import Womens from './pages/womens.jsx/index.js';
import Account from './pages/youraccount.jsx/index.js';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/homeImprovements" element={<HomeImprovements />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
