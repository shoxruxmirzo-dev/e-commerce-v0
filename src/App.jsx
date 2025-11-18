import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';

import Layout from './pages/Layout';
import Home from './pages/Home';
import CategoryProducts from './pages/CategoryProducts';
import SearchProducts from './pages/SearchProducts';
import ProductDetails from './pages/ProductDetails';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import UserLayout from './pages/user/UserLayout';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';

function App() {
  const { user, setUser } = useState(null);

  return (
    <div className="min-h-screen flex flex-col max-lg:pb-[57px]">
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:slug_id" element={<CategoryProducts />} />
          <Route path="search" element={<SearchProducts />} />
          <Route path="product/:slug_id" element={<ProductDetails />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="user" element={<UserLayout />}>
            <Route index path="profile" element={user ? <Profile /> : null} />
            <Route path="orders" element={user ? <Orders /> : null} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
