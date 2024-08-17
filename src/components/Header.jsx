import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/OSUlogo.jpg'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white text-lg p-4 top-0 sticky z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="OSU Logo" className="w-12 h-12 rounded-full border-2 border-white shadow-md" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li><Link to="/" className="text-white hover:underline">Home</Link></li>
          <li><Link to="/departments" className="text-white hover:underline">Departments</Link></li>
          <li><Link to="/faculty" className="text-white hover:underline">Faculty</Link></li>
          <li><Link to="/events" className="text-white hover:underline">Events</Link></li>
          <hr className="border-t-2 border-gray-300 shadow-lg mx-4" />
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-800 md:hidden`}>
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          <li><Link to="/" className="text-white text-lg hover:underline" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/departments" className="text-white text-lg hover:underline" onClick={toggleMenu}>Departments</Link></li>
          <li><Link to="/faculty" className="text-white text-lg hover:underline" onClick={toggleMenu}>Faculty</Link></li>
          <li><Link to="/events" className="text-white text-lg hover:underline" onClick={toggleMenu}>Events</Link></li>
        </ul>
      </div>

      {/* Background Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
