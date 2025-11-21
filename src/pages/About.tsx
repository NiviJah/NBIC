
import { ContactForm } from '../components/ContactForm';

export const About = () => {
  const team = [
    {
      name: 'Sarah Cohen',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'David Levi',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Yael Golan',
      role: 'Community Outreach',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Michael Ben-Ari',
      role: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero / Mission */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-6">Our Story & Mission</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            NBIC is dedicated to bridging cultures and building a vibrant, inclusive community for Israelis and friends of Israel throughout New Brunswick. We strive to create a home away from home, fostering connections through shared heritage, celebration, and mutual support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg group-hover:border-accent transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-text">{member.name}</h3>
                <p className="text-secondary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-gray-600">Have a question or want to get involved? We'd love to hear from you.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
