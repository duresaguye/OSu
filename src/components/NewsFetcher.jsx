import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsFetcher = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState('news');

  useEffect(() => {
    const fetchNewsAndEvents = async () => {
      try {
        const response = await axios.get('https://osu-backend.vercel.app/api/news');
        setNews(response.data.newsItems || []);
        setEvents(response.data.upcomingEvents || []);
      } catch (error) {
        console.error('Error fetching news and events:', error);
        setError('Error fetching news and events');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsAndEvents();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="p-8 bg-gray-300 shadow-lg rounded-lg max-w-4xl w-full">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-300 ${view === 'news' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setView('news')}
          >
            Latest News
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-300 ${view === 'events' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setView('events')}
          >
            Upcoming Events
          </button>
        </div>

        {view === 'news' && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-center">Latest News</h1>
            {loading && <p className="text-blue-500 text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {news.length === 0 && !loading && <p className="text-gray-500 text-center">No news available.</p>}
            <ul className="space-y-6">
              {news.map((item, index) => (
                <li className="border-b pb-6" key={index}>
                  <a className="text-xl font-semibold text-blue-600 hover:underline" href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <p className="text-gray-700 mt-2">{item.sampleText}</p>
                  {item.imageLink && <img className="w-full h-52 mt-4 rounded-lg object-cover" src={item.imageLink} alt={item.title} />}
                  <p className="text-sm text-gray-500 mt-2">{item.datePosted}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {view === 'events' && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h1>
            {events.length === 0 && !loading && <p className="text-gray-500 text-center">No upcoming events available.</p>}
            <ul className="space-y-6">
              {events.map((event, index) => (
                <li className="border-b pb-6" key={index}>
                  {event.imageLink && <img className="w-full h-52  lg:h-80 mt-4 rounded-lg object-cover" src={event.imageLink} alt={event.title} />}
                  <a className="text-xl font-semibold text-blue-600 hover:underline mt-4" href={event.link} target="_blank" rel="noopener noreferrer">
                    {event.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsFetcher;
