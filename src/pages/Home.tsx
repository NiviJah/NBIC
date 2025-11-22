import { Link } from 'react-router-dom';
import { Compass, Book, Handshake, ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { EventCard } from '../components/EventCard';
import { NewsCard } from '../components/NewsCard';
import { Button } from '../components/ui/Button';
import { events, newsItems } from '../data/mockData';

export const Home = () => {
  // Get the first 3 upcoming events
  const upcomingEvents = events.slice(0, 3);
  // Get the first 3 latest news
  const latestNews = newsItems.slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      <Hero />

      {/* Happening Soon Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold text-primary">Happening Soon</h2>
          <Link to="/events" className="text-accent font-medium hover:text-accent/80 flex items-center gap-1">
            View all events <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Link key={event.id} to={`/events/${event.id}`} className="block h-full">
              <EventCard 
                title={event.title}
                date={event.date}
                month={event.month}
                location={event.location}
                image={event.image}
              />
            </Link>
          ))}
        </div>

      </section>

      {/* Latest News Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-primary">Latest News</h2>
            <Link to="/news" className="text-accent font-medium hover:text-accent/80 flex items-center gap-1">
              View all news <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Link key={news.id} to={`/news/${news.id}`} className="block h-full">
                <NewsCard 
                  title={news.title}
                  date={news.date}
                  author={news.author}
                  excerpt={news.excerpt}
                  image={news.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-secondary/10 p-4 rounded-full mb-6">
                <Compass className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-3">New to New Brunswick?</h3>
              <p className="text-gray-600 mb-6">Just arrived? We have a complete guide to help you settle in and connect.</p>
              <Link to="/resources">
                <Button variant="outline" size="sm">Start Here Guide</Button>
              </Link>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-secondary/10 p-4 rounded-full mb-6">
                <Book className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-3">Hebrew/Cultural Education</h3>
              <p className="text-gray-600 mb-6">Resources for learning Hebrew and maintaining cultural traditions.</p>
              <Link to="/resources">
                <Button variant="outline" size="sm">View Resources</Button>
              </Link>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-secondary/10 p-4 rounded-full mb-6">
                <Handshake className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-3">Get Involved/Volunteer</h3>
              <p className="text-gray-600 mb-6">Join our vibrant community of volunteers and make a difference.</p>
              <Link to="/about">
                <Button variant="outline" size="sm">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
