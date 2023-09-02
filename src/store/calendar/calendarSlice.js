import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';


const tempEvent =   {
    _id: new Date().getTime(),
    title: 'My event',
    note: 'This is a cool event',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Nacho'
    }
}

const initialState = {
    events:[
        tempEvent
    ],
    activeEvent: null,
}
const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onSetActiveEvent: (state, action) => {
        state.activeEvent = action.payload
    }
  }
});

export const {onSetActiveEvent} = calendarSlice.actions

export default calendarSlice.reducer