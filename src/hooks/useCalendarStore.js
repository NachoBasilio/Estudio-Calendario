import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDelete, onSetActiveEvent, updateEvent } from "../store/calendar/calendarSlice"
import calendarApi from "../api/calendarApi"


export const useCalendarStore = () => {
    const {events, activeEvent} = useSelector(state => state.calendar)
    const {user} = useSelector(state =>  state.auth)
    const dispatch = useDispatch()

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent)=>{
        

        if(calendarEvent._id){
            dispatch(updateEvent({...calendarEvent}))
        }else{

            const {data} = await calendarApi.post("/events", calendarEvent)

            console.log(data)

            dispatch(onAddNewEvent({
                ...calendarEvent,
                id: data.id,
                user
            }))
        }
    }

    const StartDeleteEvent = () => {
        dispatch(onDelete())
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