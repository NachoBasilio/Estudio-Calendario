import { createSlice } from '@reduxjs/toolkit'
//import { addHours } from 'date-fns';


// const tempEvent =   {
//     _id: new Date().getTime(),
//     title: 'My event',
//     note: 'This is a cool event',
//     start: new Date(),
//     end: addHours(new Date(), 2),
//     bgColor: '#fafafa',
//     user: {
//         _id: '123',
//         name: 'Nacho'
//     }
// }

const initialState = {
    isLoadingEvents: true,
    events:[
        //tempEvent
    ],
    activeEvent: null,
}
const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onSetActiveEvent: (state, action) => {
        state.activeEvent = action.payload
    },
    onAddNewEvent:(state, action) => {
        state.events.push(action.payload)
        state.activeEvent = null
    },
    updateEvent:(state, action) => {
        state.events = state.events.map(e => (e.id === action.payload.id) ? action.payload : e)
    },
    onDelete: (state) => {
        if(state.activeEvent) {
        state.events = state.events.filter(e => e.id !== state.activeEvent.id)
        state.activeEvent = null
        }
    },
    onLoadEvents: (state, {payload=[]})=>{
        state.isLoadingEvents = false;
        payload.forEach(element => {
            const exists = state.events.some(dbEvent => dbEvent.id === element.id)
            if(!exists){
                state.events.push(element)
            }
        });
    }
  }
});

export const {onSetActiveEvent, onAddNewEvent, updateEvent, onDelete, onLoadEvents} = calendarSlice.actions

export default calendarSlice.reducer