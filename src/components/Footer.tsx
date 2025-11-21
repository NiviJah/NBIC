
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-bold text-2xl mb-4">NBIC</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Building community and celebrating heritage in New Brunswick. The central hub for Israelis and friends of Israel across the province.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/events" className="hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Newcomer Guide</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="/donate" className="hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>123 Community Way,<br />Fredericton, NB</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <span>(506) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@nbic.ca</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Stay Connected</h4>
            <p className="text-blue-100 text-sm mb-4">Subscribe to our newsletter for updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" size="sm" className="w-full">
                Sign up
              </Button>
            </form>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-blue-100 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} New Brunswick Israeli Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
