import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/Slices/authSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-gray-900 shadow-md text-white">
      <Link to="/" className="text-3xl font-extrabold tracking-wide flex items-center space-x-2">
        <span>💰</span>
        <span>Expense Tracker</span>
      </Link>

      <ul className="flex items-center space-x-6 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-gray-300 transition duration-200">
            Home
          </Link>
        </li>
        {user && (
          <li>
            <Link to="/summary" className="hover:text-gray-300 transition duration-200">
              Summary
            </Link>
          </li>
        )}
      </ul>

      <div className="flex items-center space-x-6">
        {user ? (
          <>
            <span className="text-gray-400">👋 Welcome, {user.name}</span>
            <button 
              onClick={handleLogout} 
              className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-600 transition duration-200 shadow-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="hover:text-gray-300 transition duration-200">
              Register
            </Link>
            <Link 
              to="/login" 
              className="bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 transition duration-200 shadow-md"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
