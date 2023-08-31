import { format ,startOfWeek, parse, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css"

import { dateFnsLocalizer } from "react-big-calendar";
import esES from 'date-fns/locale/es'


const locales = {
    'es': esES
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
