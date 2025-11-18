import { useState } from 'react';
import { Outlet } from 'react-router';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';

const Layout = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      {showLogin && <Login />}
      <Header />
      <main className="container-wrapper flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
