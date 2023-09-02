import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent } from "../store/calendar/calendarSlice"


export const useCalendarStore = () => {
    const {events, activeEvent} = useSelector(state => state.calendar)
    const distpatch = useDispatch()

    const setActiveEvent = (calendarEvent) => {
        distpatch(onSetActiveEvent(calendarEvent))
    }


    return{
        events,
        activeEvent,


        setActiveEvent
    }
}