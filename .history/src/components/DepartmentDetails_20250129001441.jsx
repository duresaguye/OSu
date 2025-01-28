import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DepartmentDetails = () => {
  const { departmentId } = useParams(); // Get the department id from the URL
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Data/Academics.json')
      .then(response => response.json())
      .then(data => {
        // Find the department by its ID
        const dept = data.find(department => department.id === departmentId);
        setDepartment(dept);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching department data:', error);
        setLoading(false);
      });
  }, [departmentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!department) {
    return <div>Department not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800">{department.name}</h1>
      <p className="text-gray-600 mb-4">{department.description}</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission:</h2>
      <p className="text-gray-600 mb-4">{department.mission || 'No mission defined'}</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vision:</h2>
      <p className="text-gray-600 mb-4">{department.vision || 'No vision defined'}</p>

      <h3 className="text-xl font-bold text-gray-800 mb-4">Departments:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {department.departments && department.departments.map(dept => (
          <div key={dept.name} className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-2xl font-semibold text-gray-800">{dept.name}</h4>
            <ul className="mt-4">
              {dept.courses.map(course => (
                <li key={course} className="text-gray-600">{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentDetails;
