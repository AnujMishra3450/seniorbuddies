import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Settings } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { isAdmin, setIsAdmin } = useContent();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/events', label: 'Events' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-blue-800 hover:text-blue-900 transition-colors">
            <Users className="h-8 w-8" />
            <span className="text-xl font-bold">Senior Buddies</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-blue-800 bg-blue-50 border-b-2 border-blue-800'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`p-2 rounded-md transition-colors ${
                isAdmin 
                  ? 'text-blue-800 bg-blue-50' 
                  : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
              }`}
              title={isAdmin ? 'Exit Admin Mode' : 'Enter Admin Mode'}
            >
              <Settings className="h-5 w-5" />
            </button>
            {isAdmin && (
              <Link
                to="/admin"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePath('/admin')
                    ? 'text-white bg-blue-800'
                    : 'text-blue-800 bg-blue-50 hover:bg-blue-100'
                }`}
              >
                Admin Panel
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-blue-800 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;