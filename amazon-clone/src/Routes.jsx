import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart.jsx';
import Clothing from './pages/clothing.jsx';
import Groceries from './pages/groceries.jsx';
import HomePage from './pages/home.jsx';
import HomeImprovements from './pages/homeImprovements.jsx';
import Kids from './pages/kids.jsx';
import Medical from './pages/medical.jsx';
import Womens from './pages/womens.jsx';
import Account from './pages/youraccount.jsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
