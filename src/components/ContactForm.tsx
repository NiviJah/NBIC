import { Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
      <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <Mail className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-2xl font-heading font-bold text-primary mb-4">Get in Touch</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Have questions or want to get involved? We'd love to hear from you. Send us an email and we'll get back to you as soon as possible.
      </p>
      <a href="mailto:contact@nbisraelicommunity.com">
        <Button variant="accent" size="lg" className="flex items-center gap-2 mx-auto">
          <Mail className="h-5 w-5" />
          Email Us
        </Button>
      </a>
    </div>
  );
};
