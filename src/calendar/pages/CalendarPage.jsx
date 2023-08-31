import { Calendar, dateFnsLocalizer } from 'react-big-calendar'

import { addHours, format ,startOfWeek, parse, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css"

import enUS from 'date-fns/locale/en-US'

import {NavBar}  from "../";
const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'My event',
    note: 'This is a cool event',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
  }
]

export default function CalendarPage() {
  return (
    <>     
      <NavBar/>
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      />
    </>
  )
}
