import { Navigate, Route, Routes } from "react-router-dom";
import {LoginPage} from "../auth";
import {CalendarPage} from "../calendar";

export default function AppRouter() {

    const authStatus = "no-autenticado"
  return (
    <Routes>   
        {
            (authStatus === "no-autenticado") ?
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
