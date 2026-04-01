import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and branding */}
        <div className="flex items-center">
          <div className="bg-teal-500 text-black p-3 rounded-xl shadow-lg shadow-teal-500/20">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 2h4a2 2 0 0 1 2 2v4M22 16v4a2 2 0 0 1-2 2h-4M6 22H2a2 2 0 0 1-2-2v-4M2 8V4a2 2 0 0 1 2-2h4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="12" y1="5" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="19" />
              <line x1="5" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="19" y2="12" />
            </svg>
          </div>
          <span className="text-2xl font-bold ml-2 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            VaidyaSetu
          </span>
        </div>

        
        {/* <div className="w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div> */}

        {/* Navigation links */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-teal-400 transition">Home</Link>
          <Link to="/profile" className="hover:text-teal-400 transition">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
