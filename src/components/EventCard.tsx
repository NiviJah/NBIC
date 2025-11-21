import { MapPin } from 'lucide-react';
import { Button } from './ui/Button';

interface EventCardProps {
  title: string;
  date: string;
  month: string;
  location: string;
  image?: string;
}

export const EventCard = ({ title, date, month, location, image }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center justify-center bg-blue-50 text-primary rounded-lg p-2 min-w-[60px]">
            <span className="text-xs font-bold uppercase">{month}</span>
            <span className="text-xl font-bold">{date}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg text-text mb-1">{title}</h3>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
