//styles
import { useContext, useEffect } from "react";
import { RenewTokenModal } from "../components/common/modals/RenewTokenModal";
import { DashBoardContainer } from "../components/Dashboard/styles"
//components


import { UserContext } from './../contexts/userContext';
import { DashboardHeader } from "../components/Dashboard/components/Header/Header";
import { TasksSection } from "../components/Dashboard/components/Tasks/TasksSection";



export const Planner = () => {
    const { displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal } = useContext(UserContext);
    useEffect(() => {
        const time = localStorage.getItem('sessionExpires');
        console.log(time);
        setTimeout(() => {
            setDisplayRenewAccessTokenModal(true);
        }, time ? parseInt(time) - 100000 : 0);
       
    }, [setDisplayRenewAccessTokenModal, displayRenewAccessTokenModal]);

    return (
        <DashBoardContainer>
            {displayRenewAccessTokenModal === true && <RenewTokenModal />}
            <DashboardHeader />
          <TasksSection />
        </DashBoardContainer>
            
    )
}