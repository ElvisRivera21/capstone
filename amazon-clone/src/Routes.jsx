import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart';
import Clothing from './pages/clothing';
import Groceries from './pages/groceries';
import Home from './pages/home';
import HomeImprovements from './pages/homeImprovements';
import Kids from './pages/kids';
import Medical from './pages/medical';
import Womens from './pages/womens';
import Account from './pages/yourAccount';

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
