
import { Accordion } from '../components/ui/Accordion';
import { ExternalLink } from 'lucide-react';

export const Resources = () => {
  const resourceItems = [
    {
      title: 'Newcomer Essentials',
      content: (
        <div className="space-y-4">
          <p>Essential information for those new to New Brunswick.</p>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Housing Guide & Tips
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Government Services (Medicare, SIN)
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Local Transportation
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Jewish Life in NB',
      content: (
        <div className="space-y-4">
          <p>Connect with the local Jewish community and find religious resources.</p>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Synagogues in New Brunswick
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Kosher Food Availability
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Holiday Guides & Times
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Israeli Culture',
      content: (
        <div className="space-y-4">
          <p>Resources to stay connected to Israeli culture and language.</p>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Hebrew Language Resources
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Israeli Media Links
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Cultural Workshops
              </a>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: 'Professional Networking',
      content: (
        <div className="space-y-4">
          <p>Grow your career and network in New Brunswick.</p>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Job Boards & Opportunities
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Mentorship Programs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-primary hover:underline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Business Directory
              </a>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Information & Support</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A curated collection of resources to help you navigate life in New Brunswick.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion items={resourceItems} />
      </div>
    </div>
  );
};
