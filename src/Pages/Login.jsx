import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        console.log('Login successful:', data);
        window.location.reload(); // Refresh to update header
        navigate('/add-medicine');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 flex justify-center items-center px-4">
      <div className="bg-white shadow-2xl p-8 rounded-2xl border border-emerald-100 w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-emerald-400/10 to-teal-400/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-emerald-400/10 to-teal-400/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">MT</span>
            </div>
            <h2 className="text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to your MediTrack account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-emerald-500 transition-colors"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
