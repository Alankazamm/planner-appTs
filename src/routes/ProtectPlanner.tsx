//description: this file is used to protect the planner page from unlogged users
//it redirects to login page if user is not logged in(there is no token in local storage)
//hooks
import { Navigate } from 'react-router-dom';

//components
import { Planner } from "../pages/Planner";

export const ProtectPlanner = () => {
   
    return(
        <>
            {sessionStorage.getItem('token') ? <Planner/>: <Navigate to="/login" />}
        </>
    )
}