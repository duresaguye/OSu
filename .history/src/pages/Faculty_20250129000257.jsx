import React from 'react';

const faculty = [
  { 
    name: 'Dr. Abebe Tadesse', 
    title: 'Professor of Development Studies', 
    location: 'Development Studies Building, Room 102' 
  },
  { 
    name: 'Dr. Hiwot Alemu', 
    title: 'Associate Professor of Finance and Management', 
    location: 'Economics Block, Room 212' 
  },
  { 
    name: 'Dr. Kebede Teshome', 
    title: 'Professor of Public Policy', 
    location: 'Public Policy Wing, Room 405' 
  },
  { 
    name: 'Dr. Meseret Bekele', 
    title: 'Assistant Professor of Law', 
    location: 'Law Block, Room 310' 
  },
  { 
    name: 'Dr. Tsion Worku', 
    title: 'Professor of Rural Development', 
    location: 'Rural Studies Complex, Room 215' 
  },
  { 
    name: 'Dr. Fikadu Dinka', 
    title: 'Lecturer of Accounting and Finance', 
    location: 'Finance Building, Room 108' 
  },
  { 
    name: 'Dr. Genet Asfaw', 
    title: 'Dean of College of Science and Technology', 
    location: 'Science Block, Dean’s Office' 
  },
  { 
    name: 'Dr. Solomon Tufa', 
    title: 'Professor of Leadership and Governance', 
    location: 'Leadership Building, Room 206' 
  },
  { 
    name: 'Dr. Bethelhem Zewde', 
    title: 'Assistant Professor of Urban Management', 
    location: 'Urban Studies Block, Room 201' 
  },
  { 
    name: 'Dr. Biruk Haile', 
    title: 'Professor of Oromia Folklore and Afaan Oromo', 
    location: 'Cultural Studies Wing, Room 101' 
  },
  { 
    name: 'Dr. Dawit Mekonnen', 
    title: 'Lecturer of Procurement and Property Management', 
    location: 'Management Block, Room 110' 
  },
  { 
    name: 'Dr. Rediet Tsegaye', 
    title: 'Associate Professor of Public Administration', 
    location: 'Administration Block, Room 305' 
  },
  { 
    name: 'Dr. Alemayehu Desta', 
    title: 'Lecturer of Agricultural Value Chain Management', 
    location: 'Agricultural Studies Wing, Room 102' 
  },
  { 
    name: 'Dr. Rahel Workneh', 
    title: 'Dean of College of Development Studies', 
    location: 'Development Complex, Dean’s Office' 
  },
  { 
    name: 'Dr. Yohannes Mesfin', 
    title: 'Professor of Social Studies', 
    location: 'Social Sciences Block, Room 202' 
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
  