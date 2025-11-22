import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import { Event } from '../data/mockData';

interface CalendarViewProps {
  events: Event[];
}

export const CalendarView = ({ events }: CalendarViewProps) => {
  const navigate = useNavigate();

  // Transform our event data to FullCalendar format
  const calendarEvents = events.map(event => {
    // Parse the date string "Oct 24, 2025" to YYYY-MM-DD
    const dateObj = new Date(event.fullDate);
    const dateStr = dateObj.toISOString().split('T')[0];
    
    return {
      id: event.id.toString(),
      title: event.title,
      date: dateStr,
      // Add custom properties if needed
      extendedProps: {
        category: event.category,
        location: event.location
      }
    };
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <style>{`
        .fc-event {
          cursor: pointer;
          background-color: var(--color-primary);
          border-color: var(--color-primary);
        }
        .fc-event:hover {
          background-color: var(--color-accent);
          border-color: var(--color-accent);
        }
        .fc-day-today {
          background-color: #F7F9FC !important;
        }
        .fc-button-primary {
          background-color: var(--color-primary) !important;
          border-color: var(--color-primary) !important;
        }
        .fc-button-primary:hover {
          background-color: var(--color-secondary) !important;
          border-color: var(--color-secondary) !important;
        }
      `}</style>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        eventClick={(info) => {
          navigate(`/events/${info.event.id}`);
        }}
        height="auto"
        contentHeight={600}
      />
    </div>
  );
};
