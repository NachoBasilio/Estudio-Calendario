import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDelete, onLoadEvents, onSetActiveEvent, updateEvent } from "../store/calendar/calendarSlice"
import calendarApi from "../api/calendarApi"
import { convertEventsToDateEvents } from "../helpers"
import Swal from "sweetalert2"


export const useCalendarStore = () => {
    const {events, activeEvent} = useSelector(state => state.calendar)
    const {user} = useSelector(state =>  state.auth)
    const dispatch = useDispatch()

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent)=>{
        
        try {
            if(calendarEvent.id){
                await calendarApi.put("/events/"+calendarEvent.id, calendarEvent)
                dispatch(updateEvent({...calendarEvent, user}))
                return
            }
    
            const {data} = await calendarApi.post("/events", calendarEvent)
    
            console.log(data)
    
            dispatch(onAddNewEvent({
                ...calendarEvent,
                id: data.id,
                user
            }))
        } catch (error) {
            console.log(error)
            Swal.fire("Error al guardar", error.response.data.msg, "error")
        }

    }

    const StartDeleteEvent = () => {
        dispatch(onDelete())
    }

    
    const startLoadingEvents = async () =>{
        try {
            
            const {data} = await calendarApi.get("/events")
            const events = convertEventsToDateEvents(data.event)
            dispatch(onLoadEvents(events))
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