
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <div className="relative bg-primary text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Community gathering outdoors"
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-heading font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building Community, Celebrating Heritage in New Brunswick
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          The central hub for Israelis and friends of Israel across the province.
        </p>
        <div className="mt-10">
          <Button variant="accent" size="lg">
            View Upcoming Events
          </Button>
        </div>
      </div>
    </div>
  );
};
