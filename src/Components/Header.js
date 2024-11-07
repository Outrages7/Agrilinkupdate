import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './Images/logo.svg'; // Adjust the path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to="/"> {/* Wrap the image with Link */}
              <img
                src={logo} 
                alt="AgriLink Logo" 
                className="w-12 h-12" 
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
            <Link to="#" className="text-gray-600 hover:text-green-600">How It Works</Link>
            <Link to="#" className="text-gray-600 hover:text-green-600">Contact</Link>
            <Link to="/login">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Login / Sign Up
              </button>
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
              <Link to="#" className="text-gray-600 hover:text-green-600">About</Link>
              <Link to="#" className="text-gray-600 hover:text-green-600">How It Works</Link>
              <Link to="#" className="text-gray-600 hover:text-green-600">Contact</Link>
              <Link to="/login">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Login / Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
