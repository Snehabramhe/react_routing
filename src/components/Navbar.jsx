import React from 'react'
import { Link } from 'react-router-dom';
import react from '../assets/react.svg'
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="text-xl font-bold">
              <Link to="/" className="hover:text-gray-300">
                 <img src={react} alt="img-notfound" />
              </Link>
            </div>
    
            {/* Links Section */}
            <div>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-gray-300">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-300">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                </li>
                <li>
                  <Link to="/users" className="hover:text-gray-300">Users</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
};
export default Navbar
