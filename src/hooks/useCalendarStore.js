import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDelete, onSetActiveEvent, updateEvent } from "../store/calendar/calendarSlice"


export const useCalendarStore = () => {
    const {events, activeEvent} = useSelector(state => state.calendar)
    const distpatch = useDispatch()

    const setActiveEvent = (calendarEvent) => {
        distpatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent)=>{
        

        if(calendarEvent._id){
            distpatch(updateEvent({...calendarEvent}))
        }else{
            distpatch(onAddNewEvent({
                ...calendarEvent,
                _id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'Nacho'
                }
            }))
        }
    }

    const StartDeleteEvent = () => {
        distpatch(onDelete())
    }

    




    return{
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,


        setActiveEvent,
        startSavingEvent,
        StartDeleteEvent
    }
}