import { Calendar } from 'react-big-calendar'
import {NavBar}  from "../";

import { addHours} from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css"

import { getMessagesES, localizer } from '../../helpers';

const events = [
  {
    title: 'My event',
    note: 'This is a cool event',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
  }
]

const eventStyleGetter = (event, start, end, isSelected) => {
  const style = {
    backgroundColor: "#347CF7",
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white',
    border: '0px',
    display: 'block'
  }
  return {
    style
  }  
}

export default function CalendarPage() {
  return (
    <>     
      <NavBar/>
      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={getMessagesES()}
      eventPropGetter={eventStyleGetter}
      />
    </>
  )
}
