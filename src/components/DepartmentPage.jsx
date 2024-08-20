import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners'; 


const DepartmentPage = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch department data from the JSON file
    fetch('/Data/Academics.json')
      .then(response => response.json())
      .then(data => {
        // Find the department that matches the id
        const dept = data.find(dept => dept.id === id);
        setDepartment(dept);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching department data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [id]);

  // Show loading spinner if data is still being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#36D7B7" size={50} />
      </div>
    );
  }

  // If no department found, display a message
  if (!department) return <div className="p-4">Department not found</div>;

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
