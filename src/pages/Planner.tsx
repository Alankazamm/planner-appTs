//styles
import { useContext, useEffect } from "react";
import { RenewTokenModal } from "../components/common/modals/RenewTokenModal";
import { DashContainer } from "../components/Dashboard/styles"
//components
import { Header } from "../components/Dashboard/components/Header"
import { TasksSection } from "../components/dashboard/tasks/TasksSection"
import { UserContext } from './../contexts/userContext';



export const Planner = () => {
    const { displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal } = useContext(UserContext);
    useEffect(() => {
        const time = localStorage.getItem('sessionExpires');
        console.log(time);
        const timer = setTimeout(() => {
            setDisplayRenewAccessTokenModal(true);
        }, time ? parseInt(time) - 100000 : 0);
        return () => {
            clearTimeout(timer);
        }
    }, [setDisplayRenewAccessTokenModal, displayRenewAccessTokenModal]);

    return (
        <DashContainer>
            {displayRenewAccessTokenModal === true && <RenewTokenModal />}
            <Header />
          <TasksSection />
        </DashContainer>
            
    )
}