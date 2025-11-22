
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, MapPin, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { events } from '../data/mockData';

export const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Event not found</h2>
          <Link to="/events">
            <Button variant="outline">Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Image */}
      <div className="h-[400px] relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Link to="/events" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
          <span className="block text-accent font-bold tracking-wide uppercase mb-2">{event.category}</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">{event.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">About This Event</h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <ReactMarkdown>{event.description}</ReactMarkdown>
                </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="font-bold text-primary mb-4">Registration Information</h3>
                <p className="text-gray-600 mb-4">
                  Please RSVP to ensure we have an accurate headcount for food and seating. 
                  This event is open to all community members and friends.
                </p>
                <a href={`mailto:info@nbic.ca?subject=RSVP for ${event.title}`} className="block">
                  <Button variant="accent" size="lg" className="w-full md:w-auto">RSVP Now</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="font-heading font-bold text-xl text-primary mb-6">Event Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 font-medium uppercase">Date</span>
                    <span className="block text-text font-semibold">{event.fullDate}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 font-medium uppercase">Time</span>
                    <span className="block text-text font-semibold">{event.time}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 font-medium uppercase">Location</span>
                    <span className="block text-text font-semibold">{event.location}</span>
                    <a href="#" className="text-primary text-sm hover:underline mt-1 block">View on Map</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button 
                  variant="primary" 
                  className="w-full mb-3"
                  onClick={() => {
                    const startTime = new Date(`${event.fullDate} ${event.time}`);
                    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Add 1 hour
                    
                    const formatDate = (date: Date) => {
                      return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
                    };

                    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDate(startTime)}/${formatDate(endTime)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
                    
                    window.open(googleCalendarUrl, '_blank');
                  }}
                >
                  Add to Calendar
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }}
                >
                  Share Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
