import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { newsItems } from '../data/mockData';

export const News = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Community News</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest announcements, stories, and highlights from NBIC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 overflow-hidden">
                <Link to={`/news/${item.id}`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </Link>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-text mb-3">
                  <Link to={`/news/${item.id}`} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="self-start">
                  <Button variant="outline" size="sm">Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
