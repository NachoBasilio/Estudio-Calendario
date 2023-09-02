import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui/uiSlice";
import calendarSlice from "./calendar/calendarSlice";

export const store = configureStore({
    reducer:{
        ui: uiSlice,
        calendar: calendarSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})