export interface Event {
  id: number;
  title: string;
  date: string;
  month: string;
  fullDate: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Sukkot Potluck Gathering',
    date: '24',
    month: 'OCT',
    fullDate: 'Oct 24, 2025',
    time: '6:00 PM',
    location: 'Fredericton Community Hall',
    category: 'Social Gatherings',
    description: 'Join us for a festive Sukkot potluck! Bring your favorite dish to share as we celebrate the harvest festival together. There will be activities for children, music, and plenty of opportunity to connect with old friends and make new ones. All are welcome!',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Hebrew Storytime & Craft',
    date: '07',
    month: 'NOV',
    fullDate: 'Nov 07, 2025',
    time: '10:30 AM',
    location: 'Moncton Public Library',
    category: 'Family Friendly',
    description: 'A delightful morning for families with young children. We will read classic Hebrew stories, sing songs, and do a fun craft activity related to the upcoming holidays. No prior Hebrew knowledge is required - everyone is welcome to join the fun!',
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Professional Networking Night',
    date: '21',
    month: 'NOV',
    fullDate: 'Nov 21, 2025',
    time: '7:00 PM',
    location: 'Saint John Innovation Centre',
    category: 'Professional',
    description: 'Expand your professional network in New Brunswick. This event brings together professionals from various industries for an evening of connection and collaboration. Light refreshments will be served. Guest speaker to be announced.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Hanukkah Party',
    date: '15',
    month: 'DEC',
    fullDate: 'Dec 15, 2025',
    time: '5:00 PM',
    location: 'Fredericton Convention Centre',
    category: 'Holidays',
    description: 'Our biggest event of the year! Join us for the annual Hanukkah Party featuring candle lighting, traditional foods (latkes and sufganiyot!), live music, and entertainment for all ages. Don\'t miss this wonderful community celebration.',
    image: 'https://images.unsplash.com/photo-1544246820-d388fd53494f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'NBIC Scholarship Program Announced',
    date: 'Oct 15, 2025',
    author: 'Board of Directors',
    excerpt: 'We are proud to announce a new scholarship program for students in our community pursuing higher education in New Brunswick.',
    content: 'The New Brunswick Israeli Community (NBIC) is thrilled to launch our inaugural Scholarship Program. This initiative is designed to support students within our community who are pursuing post-secondary education in New Brunswick. \n\nWe believe in investing in the future leaders of our community. Two scholarships of $1,000 each will be awarded for the upcoming academic year. Applicants must demonstrate academic achievement, community involvement, and a commitment to fostering cultural understanding.\n\nApplications open on November 1st and close on January 31st. We encourage all eligible students to apply and take advantage of this opportunity.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Successful Summer Picnic',
    date: 'Aug 28, 2025',
    author: 'Events Team',
    excerpt: 'Over 100 community members gathered at Centennial Park for our annual summer picnic. Check out the photos and highlights.',
    content: 'What a fantastic day! Our annual Summer Picnic at Centennial Park was a resounding success, with over 100 community members in attendance. The weather was perfect, the food was delicious, and the company was even better.\n\nHighlights included a tug-of-war competition, face painting for the kids, and a surprise musical performance by local artists. It was heartwarming to see so many new faces connecting with long-time members.\n\nA huge thank you to our volunteers who arrived early to set up and stayed late to clean up. Events like this wouldn\'t be possible without your dedication. We\'re already looking forward to next year!',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'New Hebrew Classes Starting Soon',
    date: 'Aug 10, 2025',
    author: 'Education Committee',
    excerpt: 'Registration is now open for fall Hebrew classes for all levels, from beginner to advanced conversational.',
    content: 'Shalom! We are excited to announce the schedule for our Fall Hebrew Classes. Whether you are looking to learn the aleph-bet for the first time or want to polish your conversational skills, we have a class for you.\n\nClasses will be held on Tuesday and Thursday evenings at the Community Centre. We are offering three levels:\n\n1. **Beginner:** Introduction to reading and basic vocabulary.\n2. **Intermediate:** Grammar fundamentals and sentence structure.\n3. **Advanced:** Conversational practice and current events discussion.\n\nSpaces are limited, so please register early to secure your spot. Learning a language is a wonderful way to connect with culture and heritage.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
