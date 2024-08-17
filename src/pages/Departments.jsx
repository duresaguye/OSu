import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch department data from the JSON file
    fetch('/Data/Academics.json')
      .then(response => response.json())
      .then(data => setDepartments(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 ">Departments</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map(dept => (
          <li key={dept.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Link to={`/department/${dept.id}`} className="block p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{dept.name}</h2>
              <p className="text-gray-600">{dept.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
