
import React from 'react';

const faculty = [
  { name: 'Dr. John Doe', title: 'Professor of Computer Science' },
  { name: 'Dr. Jane Smith', title: 'Associate Professor of Electrical Engineering' },
  { name: 'Dr. Emily Johnson', title: 'Assistant Professor of Mechanical Engineering' },
];

const Faculty = () => {
  return (
    <div className="p-8 ">
      <h2 className="text-3xl font-bold mb-6">Faculty</h2>
      <ul className="space-y-4">
        {faculty.map((member, index) => (
          <li key={index} className=" p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p>{member.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;
