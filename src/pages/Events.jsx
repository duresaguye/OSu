import React from 'react';

const events = [
  { title: 'Open Day', date: '2024-09-01', description: 'Come and visit our university.' },
  { title: 'Alumni Meetup', date: '2024-10-10', description: 'Reconnect with your classmates.' },
  { title: 'Research Conference', date: '2024-11-15', description: 'Present your research papers.' },
];

const Events = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Events & News</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
