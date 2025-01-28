import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const DepartmentPage = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
        <div className="p-6">
          {/* Department Name */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{department.name}</h1>
          
          {/* Department Description */}
          <p className="text-gray-700 text-lg mb-6">{department.description}</p>
          
          {/* Mission */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
          <p className="text-gray-600 mb-6">{department.mission || 'No mission defined'}</p>

          {/* Vision */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h2>
          <p className="text-gray-600 mb-6">{department.vision || 'No vision defined'}</p>

          {/* Department Courses */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Courses Offered</h2>
          {department.courses && department.courses.length > 0 ? (
            <ul className="list-disc pl-6 space-y-2">
              {department.courses.map((course, index) => (
                <li key={index} className="text-gray-600 text-lg">{course}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No courses available.</p>
          )}

          {/* Additional Department Info (Optional) */}
          {department.additionalInfo && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
              <p className="text-gray-600">{department.additionalInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
