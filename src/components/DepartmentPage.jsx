import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DepartmentPage = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    // Fetch department data from the JSON file
    fetch('/Data/Academics.json')
      .then(response => response.json())
      .then(data => {
        // Find the department that matches the id
        const dept = data.find(dept => dept.id === id);
        setDepartment(dept);
      })
      .catch(error => console.error('Error fetching department data:', error));
  }, [id]);

  if (!department) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{department.name}</h1>
          <p className="text-gray-700 text-lg">{department.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
