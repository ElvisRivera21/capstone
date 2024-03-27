import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './styles/index.css';

// Lazy load the pages
const Cart = React.lazy(() => import('./pages/cart.jsx'));
const Clothing = React.lazy(() => import('./pages/clothing.jsx'));
const Groceries = React.lazy(() => import('./pages/groceries.jsx'));
const HomePage = React.lazy(() => import('./pages/home.jsx'));
const HomeImprovements = React.lazy(() => import('./pages/homeImprovements.jsx'));
const Kids = React.lazy(() => import('./pages/kids.jsx'));
const Medical = React.lazy(() => import('./pages/medical.jsx'));
const Womens = React.lazy(() => import('./pages/womens.jsx'));
const Account = React.lazy(() => import('./pages/youraccount.jsx'));

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
