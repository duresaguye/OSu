import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <div className="text-blue-500 text-2xl">Loading...</div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredDepartments.length > 0 ? (
            filteredDepartments.map(dept => (
              <li 
                key={dept.id} 
                className="bg-gray-300 text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300">
                <Link className='text-center'>
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-4">{dept.id}</h2>
                    <hr className="border-t-4 border-gray-200 shadow-md" />
                  </div>
                  <p className="text-gray-800 mb-4">{dept.name}</p>
                  <Link 
                    to={`/department/${dept.id}`}
                    className="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
                  >
                    See More
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