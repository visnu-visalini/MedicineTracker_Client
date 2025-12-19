import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };
  return (
    <header className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 shadow-lg backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-emerald-500 font-bold text-lg">MT</span>
          </div>
          <h1 className="text-2xl font-bold">MediTrack</h1>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-lg items-center">
          <Link to="/" className="hover:text-emerald-100 transition-colors duration-200">Home</Link>
          <Link to="/features" className="hover:text-emerald-100 transition-colors duration-200">Features</Link>
          <Link to="/add-medicine" className="hover:text-emerald-100 transition-colors duration-200">Add Medicine</Link>
          <Link to="/medicine-list" className="hover:text-emerald-100 transition-colors duration-200">View Medicines</Link>

          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="px-6 py-2 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md border border-emerald-400">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
