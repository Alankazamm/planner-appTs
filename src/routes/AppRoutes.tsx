import { Routes, Route, Navigate } from "react-router-dom"
import { LogIn } from "../pages/LogIn"
import { SignUp } from "../pages/SignUp"
import { ProtectPlanner } from "./ProtectPlanner"
import { Planner } from './../pages/Planner';



export const AppRoutes = () => {
   

    return (
        <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/planner' element={<ProtectPlanner />} />
         
           

        </Routes>
    )
}