import { loadContentSync } from '../utils/content';
// Force HMR update

export interface Event {
  id: number;
  slug: string;
  title: string;
  date: string;
  month: string;
  fullDate: string;
  startTime: string;
  endTime: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  content: string;
}

// Load events
const eventFiles = import.meta.glob('../content/events/*.md', { eager: true, query: '?raw', import: 'default' });
const eventsData = loadContentSync<Omit<Event, 'description' | 'slug'>>(eventFiles as Record<string, string>);

export const events: Event[] = eventsData.map(e => ({
  ...e.attributes,
  slug: e.filename,
  description: e.body
})).sort((a, b) => new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime());

// Load news
const newsFiles = import.meta.glob('../content/news/*.md', { eager: true, query: '?raw', import: 'default' });
const newsData = loadContentSync<Omit<NewsItem, 'content'>>(newsFiles as Record<string, string>);

export const newsItems: NewsItem[] = newsData.map(n => ({
  ...n.attributes,
  content: n.body
})).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
