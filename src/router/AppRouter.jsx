import { Navigate, Route, Routes } from "react-router-dom";
import {LoginPage} from "../auth";
import {CalendarPage} from "../calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";

export default function AppRouter() {

    const {status, checkAutToken} = useAuthStore()

    useEffect(() => {
        checkAutToken()
    }, []);

    if( status === "checking" ) {
        return <h1>Espere...</h1>
    }



  return (
    <Routes>   
        {
            (status === "no-authenticated") ?
            (
                <Route path="/auth/*" element={<LoginPage />} />
            ) :
            (
                <Route path="/*" element={<CalendarPage/>} />        
            )
        }
        <Route path='/*' element={<Navigate to="auth/login"/>}/>
    </Routes>
  )
}
