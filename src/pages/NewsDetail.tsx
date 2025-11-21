import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { newsItems } from '../data/mockData';

export const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsItems.find(n => n.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Article not found</h2>
          <Link to="/news">
            <Button variant="outline">Back to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">{newsItem.title}</h1>
          
          <div className="flex items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {newsItem.date}
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {newsItem.author}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              {newsItem.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
              <div className="text-gray-500 italic">
                Posted in Community News
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
