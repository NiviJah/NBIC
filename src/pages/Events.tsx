import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, List, Filter, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { events } from '../data/mockData';

export const Events = () => {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-4xl font-heading font-bold text-primary">Upcoming Events</h1>
          
          <div className="flex items-center gap-4 bg-white p-2 rounded-lg shadow-sm border border-gray-100">
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-md transition-colors ${view === 'list' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              aria-label="List View"
            >
              <List className="h-5 w-5" />
            </button>
            <button
              onClick={() => setView('calendar')}
              className={`p-2 rounded-md transition-colors ${view === 'calendar' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'}`}
              aria-label="Calendar View"
            >
              <CalendarIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-wrap gap-4 items-center">
          <div className="flex items-center text-gray-500 mr-2">
            <Filter className="h-4 w-4 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {['All', 'Holidays', 'Social Gatherings', 'Family Friendly', 'Educational', 'Professional'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-secondary text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-shrink-0 bg-blue-50 text-primary rounded-lg p-4 text-center min-w-[100px]">
                  <span className="block text-sm font-bold uppercase tracking-wider">{event.month}</span>
                  <span className="block text-3xl font-bold">{event.date}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-accent uppercase tracking-wide">{event.category}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text mb-2">
                    <Link to={`/events/${event.id}`} className="hover:text-primary transition-colors">
                      {event.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                  <Link to={`/events/${event.id}`}>
                    <Button variant="accent" className="w-full md:w-auto">RSVP / Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
