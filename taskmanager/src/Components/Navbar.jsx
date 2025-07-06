import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ClipboardList, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 
    text-sm font-medium ${
      location.pathname === path
        ? 'bg-indigo-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-indigo-100 hover:text-indigo-600'
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-indigo-600 flex items-center gap-1"
          >
            <ClipboardList size={24} />
            TaskFlow
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={linkClasses('/')}>
              <Home size={18} />
              Home
            </Link>
            <Link to="/tasks" className={linkClasses('/tasks')}>
              <ClipboardList size={18} />
              Tasks
            </Link>
            <Link to="/login" className={linkClasses('/login')}>
              <LogIn size={18} />
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className={linkClasses('/')} onClick={() => setIsOpen(false)}>
            <Home size={18} />
            Home
          </Link>
          <Link to="/tasks" className={linkClasses('/tasks')} onClick={() => setIsOpen(false)}>
            <ClipboardList size={18} />
            Tasks
          </Link>
          <Link to="/login" className={linkClasses('/login')} onClick={() => setIsOpen(false)}>
            <LogIn size={18} />
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
