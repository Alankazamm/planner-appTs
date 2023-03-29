import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//styles
import { useContext, useEffect } from "react";
import { RenewTokenModal } from "../components/common/modals/RenewTokenModal";
import { DashContainer } from "../components/dashboard/DashContainer.styles";
//components
import DashboardHeader from "../components/dashboard/header/DashboardHeader";
import { TasksSection } from "../components/dashboard/tasks/TasksSection";
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
        };
    }, [setDisplayRenewAccessTokenModal, displayRenewAccessTokenModal]);
    return (_jsxs(DashContainer, { children: [displayRenewAccessTokenModal === true && _jsx(RenewTokenModal, {}), _jsx(DashboardHeader, {}), _jsx(TasksSection, {})] }));
};
