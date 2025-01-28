import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            Academic Departments
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our diverse range of academic programs and departments
          </p>
        </header>

        {/* Search Input */}
        <div className="mb-12 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search departments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-gray-500 text-xl">
              Loading Departments...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.length > 0 ? (
              filteredDepartments.map(dept => (
                <div
                  key={dept.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col min-h-[300px]"
                >
                  <Link to={`/department/${dept.id}`} className="flex flex-col flex-1 p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {dept.name}
                      </h2>
                      <div className="h-1 w-20 bg-blue-500 rounded-full" />
                    </div>
                    <p className="text-gray-600 text-lg mb-6 line-clamp-4 flex-1">
                      {dept.description}
                    </p>

                    {/* Optional Mission and Vision Display */}
                    {dept.mission && (
                      <p className="text-gray-600 text-sm mb-4">
                        <strong>Mission:</strong> {dept.mission}
                      </p>
                    )}
                    {dept.vision && (
                      <p className="text-gray-600 text-sm mb-4">
                        <strong>Vision:</strong> {dept.vision}
                      </p>
                    )}

                    <div className="mt-auto pt-4">
                      <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        See More
                      </button>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-xl">
                  No departments found matching your search
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;
