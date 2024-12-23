import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">PrimeCart</Link>
      </h1>
      <nav>
        <Link to="/cart" className="text-lg">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
