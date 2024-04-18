import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './components/shared/layout/Layout';
import LandingPage from './components/landing';
import PathNotFound from './components/404';
import ProductsPage from './components/products';
import CartPage from './components/cart';

function App() {

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<PathNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
