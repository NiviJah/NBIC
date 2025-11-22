import { Calendar, User, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
}

export const NewsCard = ({ title, date, author, excerpt, image }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center shadow-sm">
          <Calendar className="h-3 w-3 mr-1" />
          {date}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <User className="h-3 w-3 mr-1" />
          {author}
        </div>
        
        <h3 className="text-xl font-heading font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center text-accent font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
          Read Article <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </div>
  );
};
