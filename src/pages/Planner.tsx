//hooks
import { useContext, useEffect } from "react";
//styles
import { DashBoardContainer } from "../components/Dashboard/styles"
//components
import { DashboardHeader, TasksSection } from "../components/Dashboard";
import { RenewTokenModal } from "../components/common/Modals/components/RenewTokenModal";
//context
import { UserContext } from './../contexts/userContext';

export const Planner = () => {

    const { displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal } = useContext(UserContext);
    useEffect(() => {
        const time = localStorage.getItem('sessionExpires');
        const timer = setTimeout(() => {
            setDisplayRenewAccessTokenModal(true);
        }, time ? parseInt(time) - 100000 : 100000);
        return () => clearTimeout(timer);
    }, [setDisplayRenewAccessTokenModal, displayRenewAccessTokenModal]);

    return (
        <DashBoardContainer>
            {displayRenewAccessTokenModal === true && <RenewTokenModal />}
            <DashboardHeader />
          <TasksSection />
        </DashBoardContainer>
            
    )
}