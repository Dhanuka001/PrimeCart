import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Products from "../pages/products";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="w-full py-3 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">
            <Link to="/" className="font-bold text-xls">Prime<span className="text-violet-600">Cart</span></Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        
        <div className="hidden md:flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-violet-600 font-medium ">
            Home
          </Link>
          <Link to="/products" className="hover:text-violet-600 font-medium ">
            Products
          </Link>
          <Link to="/favorites" className="hover:text-violet-600 font-medium flex gap-2 items-center">
            <FaRegHeart className="ml-2" /> Favorites 
          </Link>
          <Link to="/cart" className="hover:text-violet-600 flex gap-2 font-medium  items-center">
             <IoCartOutline className="ml-2 text-xl" /> Cart
          </Link> 
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-24 text-center py-2 text-white bg-red-500 rounded-xl font-medium shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:bg-red-600 flex items-center justify-center gap-2"
            >
              Logout <FiLogOut /> 
            </button>
          ) : (
            <Link
              to="/login"
              className="w-24 text-center py-2 text-gray-700 bg-gray-100 rounded-xl font-medium shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
            >
              Login
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to="/register"
              className="w-24 py-2 text-center text-white bg-black rounded-xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] font-medium hover:bg-gray-900"
            >
              Register
            </Link>
          )}
        </nav>
       
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-6 6h6"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
      <nav className="md:hidden flex flex-col items-center bg-white text-gray-800 p-4 space-y-4 shadow-lg">
        <Link to="/" className="block hover:text-violet-600  text-center font-medium ">
          Home
        </Link>
        <Link to="/products" className="block hover:text-violet-600  text-center font-medium ">
          Products
        </Link>
        <Link to="/favorites" className="flex gap-2 items-center hover:text-violet-600  text-center font-medium ">
           <FaRegHeart className="ml-2" /> Favorites
        </Link>
        <Link to="/cart" className="flex gap-2 items-center hover:text-violet-600 text-center font-medium ">
           <IoCartOutline className="ml-2 text-xl" /> Cart
        </Link>
        <Link
          to="/login"
          className="block px-4 py-2 text-gray-700 bg-gray-100 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:bg-gray-200 text-center"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="block px-4 py-2 text-white bg-black rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:bg-gray-900 text-center"
        >
          Register
        </Link>
      </nav>
    )}

    </header>
  );
};

export default Header;
