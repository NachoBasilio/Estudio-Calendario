import { Calendar } from 'react-big-calendar'
import {NavBar, CalendarEvent, CalendarModal, FabAddNew, FabDelete}  from "../";

import "react-big-calendar/lib/css/react-big-calendar.css"

import { getMessagesES, localizer } from '../../helpers';
import { useEffect, useState } from 'react';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';


export default function CalendarPage() {
  const { openDateModal} = useUiStore()
  const {events, setActiveEvent,startLoadingEvents} = useCalendarStore()
  const {user} = useAuthStore()

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const isMyEvent = (event.user._id === user.uid) || (event.user.uid === user.uid)

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : "#465660",
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }
  
  const onDobleClick = (e)=>{
    openDateModal()
  }
  
  const onSelect = (e)=>{
    setActiveEvent(e)
    
  }
  
  const onViewChanged = (e)=>{
    localStorage.setItem('lastView', e)
  }

  useEffect(() => {
    startLoadingEvents()
  }, [])

  return (
    <>     
      <NavBar/>
      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      defaultView = {lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={getMessagesES()}
      eventPropGetter={eventStyleGetter}
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDobleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
      />

      <CalendarModal/>
      <FabAddNew/>
      <FabDelete/>
    
    </>
  )
}
