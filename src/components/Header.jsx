import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/OSUlogo.jpg'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-300  text-lg p-4 top-0 sticky z-50 ">
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
        <ul className="hidden md:flex space-x-10 items-center text-gray-800 mr-60">
          <li><Link to="/" className=" hover:underline">HOME</Link></li>
          <li><Link to="/departments" className=" hover:underline">ACADEMICS</Link></li>
          <li><Link to="/faculty" className=" hover:underline"> FACULTY</Link></li>
          <li><Link to="/events" className=" hover:underline">EVENTS</Link></li>
          <hr className="border-t-2 border-gray-300 shadow-lg mx-4" />
        </ul>
      </nav>

     {/* Mobile Sidebar */}
<div
  className={`fixed top-0 left-0 z-40 w-3/4 h-full bg-white shadow-lg transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } transition-transform duration-300 ease-in-out rounded-r-xl md:hidden`}
>
  <div className="flex justify-between items-center p-4 bg-blue-600 rounded-r-xl">
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
    <li>
      <Link
        to="/"
        className="text-lg font-semibold text-gray-800 hover:text-blue-600"
        onClick={toggleMenu}
      >
        HOME
      </Link>
    </li>
    <li>
      <Link
        to="/departments"
        className="text-lg font-semibold text-gray-800 hover:text-blue-600"
        onClick={toggleMenu}
      >
        ACADEMICS
      </Link>
    </li>
    <li>
      <Link
        to="/faculty"
        className="text-lg font-semibold text-gray-800 hover:text-blue-600"
        onClick={toggleMenu}
      >
        FACULTY
      </Link>
    </li>
    <li>
      <Link
        to="/events"
        className="text-lg font-semibold text-gray-800 hover:text-blue-600"
        onClick={toggleMenu}
      >
        EVENTS
      </Link>
    </li>
  </ul>
</div>

      {/* Background Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
