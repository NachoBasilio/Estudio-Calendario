import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui/uiSlice";
import calendarSlice from "./calendar/calendarSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
    reducer:{
        ui: uiSlice,
        calendar: calendarSlice,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})