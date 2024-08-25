import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBook, FaBuilding, FaFlask, FaGavel, FaUsers, FaGlobe, 
  FaLeaf, FaIndustry, FaUniversity, FaCalculator, FaLanguage, 
  FaSpinner, FaSeedling, FaMoneyBill, FaMicroscope, FaLandmark, 
  FaBusinessTime, FaCity, FaHandshake, FaRegChartBar, FaChalkboardTeacher 
} from 'react-icons/fa';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Fetch department data from the JSON file
    fetch('/Data/Academics.json')
      .then(response => response.json())
      .then(data => {
        
        setDepartments(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  // Map department IDs to icons
  const departmentIcons = {
    "development-studies": <FaSeedling className="text-green-600 text-9xl" />,  
    "finance-management": <FaMoneyBill className="text-blue-600 text-9xl" />,  
    "science-technology": <FaMicroscope className="text-green-500 text-9xl" />, 
    "law": <FaLandmark className="text-red-500 text-9xl" />,
    "public-policy": <FaGlobe className="text-indigo-600 text-9xl" />,  
    "Dept. of HRM and Leadership": <FaHandshake className="text-orange-500 text-9xl" />, 
    "Dept of Gov. & Dev. Management": <FaBusinessTime className="text-purple-600 text-9xl" />,  
    "Dept. Public Administration and Public Policy": <FaUniversity className="text-teal-500 text-9xl" />,  
    "DEPARTMENT OF COMMON COURCE": <FaBook className="text-pink-500 text-9xl" />,  
    "Dept of urban management": <FaCity className="text-gray-600 text-9xl" />,  
    "Dept of Agri Busi. and Value Chain Mangt.": <FaSeedling className="text-green-600 text-9xl" />,  
    "Department of Rural Development": <FaGlobe className="text-indigo-500 text-9xl" />,  
    "OROMO FOCKLORE AND AFAAN OROMO DEPARTMENT": <FaLanguage className="text-yellow-600 text-9xl" />, 
    "Dept of Accounting & Finance": <FaRegChartBar className="text-blue-600 text-9xl" />,  
    "Dep. of Procurement and Property Mgt": <FaBuilding className="text-purple-600 text-9xl" />,  
    "Department of Management": <FaChalkboardTeacher className="text-orange-500 text-9xl" />,  
  };
  // Filter departments based on search query
  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-300 min-h-screen p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">ACADEMICS</h1>
      
      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search departments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <FaSpinner className="animate-spin text-blue-500 text-2xl" />
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredDepartments.length > 0 ? (
            filteredDepartments.map(dept => (
              <li 
                key={dept.id} 
                className="bg-gray-300 text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300">
                <Link>
                  <div className="flex items-center mb-4">
                    {departmentIcons[dept.id] || <FaQuestionCircle className="text-gray-500 text-4xl" />} {/* Default icon */}
                    <h2 className="text-2xl font-semibold ml-4 mb-4">{dept.id}</h2>
                    <hr className="border-t-4 border-gray-200 shadow-md ml-4" />
                  </div>
                  <p className="text-gray-800 mb-4">{dept.name}</p>
                  <Link 
                    to={`/department/${dept.id}`}
                    className="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
                  >
                    See More
                    <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </Link>
                </Link>
              </li>
            ))
          ) : (
            <li className="col-span-full text-center text-gray-500">No departments found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Departments;
