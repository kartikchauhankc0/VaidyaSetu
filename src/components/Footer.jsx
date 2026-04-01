import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-teal-400 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10">
        {/* Branding */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Vaidya Setu
          </h2>
          <p className="text-sm text-white/80">Your trusted health companion</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-white hover:text-gray-100 text-sm">Home</a>
          <a href="#" className="text-white hover:text-gray-100 text-sm">About</a>
          <a href="#" className="text-white hover:text-gray-100 text-sm">Services</a>
          <a href="#" className="text-white hover:text-gray-100 text-sm">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-white/70 text-center md:text-right">
          © {currentYear} Vaidya Setu. All rights reserved.
        </div>
      </div>

      {/* Centered Full Address */}
      <div className="text-center text-white/80 text-sm mt-2 pb-4">
        ABES Engineering College, 19th KM Stone, NH-09, Ghaziabad, Uttar Pradesh 201009
      </div>
    </footer>
  );
};

export default Footer;
