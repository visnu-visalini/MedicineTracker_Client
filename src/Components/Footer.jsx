import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-emerald-500 font-bold text-lg">MT</span>
              </div>
              <h3 className="text-2xl font-bold">MediTrack</h3>
            </div>
            <p className="text-emerald-100 max-w-md">
              Your trusted companion for medication management. Never miss a dose, stay healthy, and take control of your wellness journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-emerald-100 hover:text-white transition-colors">Home</Link>
              <Link to="/features" className="block text-emerald-100 hover:text-white transition-colors">Features</Link>
              <Link to="/home" className="block text-emerald-100 hover:text-white transition-colors">Dashboard</Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Account</h4>
            <div className="space-y-2">
              <Link to="/login" className="block text-emerald-100 hover:text-white transition-colors">Login</Link>
              <Link to="/signup" className="block text-emerald-100 hover:text-white transition-colors">Sign Up</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-400/30 pt-8 text-center">
          <p className="text-emerald-100">© 2025 MediTrack. All Rights Reserved.</p>
          <p className="text-sm mt-2 text-emerald-200">Empowering healthier lives through smart medication management 🌟</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
