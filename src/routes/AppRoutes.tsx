import { Routes, Route, Navigate } from "react-router-dom"
import { LogIn } from "../pages/LogIn"
import { SignUp } from "../pages/SignUp"
import { ProtectPlanner } from "./ProtectPlanner"
import * as React from "react"


export const AppRoutes = () => {
   

    return (
        <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/planner' element={<ProtectPlanner />} />
         
            <Route path='*' element={<h1>404</h1>} />

        </Routes>
    )
}