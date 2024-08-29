import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '/images/osuHero.jpg';
import {FaExternalLinkAlt ,FaUserGraduate,  FaUsers , FaMapMarkedAlt, FaChalkboardTeacher, FaUniversity, FaBook } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="">

      {/* Introduction Section with Background Image */}
      <section
        className="relative bg-cover bg-center  py-52  text-white"
       style={{ backgroundImage: `url(${backgroundImage})` }}


      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Welcome to Oromia State University</h2>
          <p className="text-xl mb-8">Your gateway to academic excellence and innovation.</p>
          <Link to="/departments" className="bg-blue-600  px-6 py-3 rounded-full text-lg hover:bg-blue-700">Explore Departments</Link>
        </div>
      </section>

      {/* Features Section */}
     <section className="p-16 bg-gray-white ">
  <div className="container mx-auto text-center ">

                  <div className="flex items-center justify-center mb-12 space-x-2">
                          <h2 className="text-3xl font-bold">Oromia State University</h2>
          <a
            href="https://www.osu.edu.et/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 hover:underline text-lg"
          >
            <FaExternalLinkAlt className="mr-2 text-lg" />
            <span>Website</span>
          </a>
        </div>
    <div className="mx-auto max-w-4xl  border-gray-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center flex-col">
            <FaMapMarkedAlt className="text-6xl mb-4" />
            <h4 className="text-6xl font-bold mb-2">10+</h4>
            <h5 className="text-xl font-semibold">Campuses</h5>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center flex-col">
            <FaChalkboardTeacher className="text-6xl mb-4" />
            <h4 className="text-6xl font-bold mb-2">100+</h4>
            <h5 className="text-xl font-semibold">Lecturers & Staff</h5>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-orange-600  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center flex-col">
            <FaUniversity className="text-6xl mb-4" />
            <h4 className="text-6xl font-bold mb-2">15+</h4>
            <h5 className="text-xl font-semibold">UG Departments</h5>
          </div>
          <div className="bg-gradient-to-r from-red-400 to-red-600  p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center flex-col">
            <FaBook className="text-6xl mb-4" />
            <h4 className="text-6xl font-bold mb-2">5+</h4>
            <h5 className="text-xl font-semibold">Postgraduate & Doctoral</h5>
          </div>
        </div>
    </div>
  </div>
</section>


      {/* Statistics Section */}
     <section className=" p-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 ">University Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600  p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center flex-col">
            <FaUserGraduate className="text-6xl mb-4" />
            <h3 className="text-4xl font-bold mb-2">500+</h3>
            <p className="text-xl">Students Enrolled</p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600  p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center flex-col">
            <FaBook className="text-6xl mb-4" />
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-xl">Programs Offered</p>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-orange-600  p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center flex-col">
            <FaUsers className="text-6xl mb-4" />
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p className="text-xl">Faculty Members</p>
          </div>
        </div>
      </div>
    </section>

   


     
    </div>
  );
};

export default Home;
