import React from 'react';

const faculty = [
  { 
    name: 'Dr. Bekele Alemayehu', 
    title: 'Professor of Development Studies',
    location: 'Development Studies Block, Room 305'
  },
  { 
    name: 'Dr. Alemitu Kebede', 
    title: 'College of Finance and Management',
    location: 'Finance Block, Room 212'
  },
  { 
    name: 'Dr. Tsegaye Gebremedhin', 
    title: 'Associate Professor of Public Policy',
    location: 'Public Policy Building, Room 101'
  },
  { 
    name: 'Dr. Worknesh Dejene', 
    title: 'Professor of Rural Development',
    location: 'Development Studies Block, Room 207'
  },
  { 
    name: 'Dr. Mesfin Abera', 
    title: 'Associate Professor of Urban Management',
    location: 'Urban Management Wing, Room 309'
  },
  { 
    name: 'Dr. Birtukan Fekadu', 
    title: 'Assistant Professor of Agricultural Value Chain',
    location: 'Agriculture Complex, Room 412'
  },
  { 
    name: 'Dr. Solomon Tadesse', 
    title: 'Professor of Governance & Development Management',
    location: 'Public Administration Building, Room 105'
  },
  { 
    name: 'Dr. Eden Zewdie', 
    title: 'Associate Professor of Human Resource Management',
    location: 'Leadership Block, Room 208'
  },
  { 
    name: 'Dr. Dawit Mengistu', 
    title: 'Professor of Oromo Folklore Studies',
    location: 'Cultural Studies Building, Room 315'
  }
];

const Faculty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            Faculty Members
          </h2>
          <p className="text-gray-600 text-lg">
            Meet our distinguished academic staff and researchers
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 pr-2">
                    {member.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Office
                  </span>
                </div>
                
                <p className="text-gray-600 text-lg mb-4">
                  {member.title}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 flex items-center">
                    <span className="mr-2">📍</span>
                    {member.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;