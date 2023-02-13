import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Planner } from "../pages/Planner";
import { AppState } from './../redux/reducerFunction';



export const ProtectPlanner = () => {
    const isLoggedIn = useSelector((store: AppState) => store.loggedIn)
    return(
        <>
            {isLoggedIn ? <Planner/>: <Navigate to="/login" />}
        </>
    )
}