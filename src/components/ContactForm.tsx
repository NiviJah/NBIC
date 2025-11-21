
import { Button } from './ui/Button';

export const ContactForm = () => {
  return (
    <form className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-2xl font-heading font-bold text-primary mb-6">Get in Touch</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
        <select
          id="subject"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-white"
        >
          <option value="">Select a subject...</option>
          <option value="general">General Question</option>
          <option value="event">Event Idea</option>
          <option value="volunteer">Volunteering</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <Button variant="accent" className="w-full md:w-auto">Send Message</Button>
    </form>
  );
};
