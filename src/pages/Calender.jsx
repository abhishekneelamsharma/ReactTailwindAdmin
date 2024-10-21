import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import '/react-big-calendar/lib/sass/styles';
import { useState } from 'react';

const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  console.log(events);

  const handleSelectEvent = (event) => {
    if (window.confirm(`Are you sure you want to delete this event: ${event.title}`)) {
      setEvents(events.filter((e) => e !== event));
    }
  };


  return (
    <>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "5px"
          }}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
        />
      </div>
    </>
  )
}

export default MyCalendar;