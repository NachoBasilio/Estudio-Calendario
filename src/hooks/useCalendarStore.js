import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDelete, onSetActiveEvent, updateEvent } from "../store/calendar/calendarSlice"
import calendarApi from "../api/calendarApi"
import { convertEventsToDateEvents } from "../helpers"


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

    
    const startLoadingEvents = async () =>{
        try {
            
            const {data} = await calendarApi.get("/events")
            const events = convertEventsToDateEvents(data.event)
        } catch (error) {
            console.log(error)
        }
    }



    return{
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,


        setActiveEvent,
        startSavingEvent,
        StartDeleteEvent,
        startLoadingEvents
    }
}