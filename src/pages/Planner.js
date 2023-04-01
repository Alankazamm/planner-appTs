import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//styles
import { useContext, useEffect } from "react";
import { RenewTokenModal } from "../components/common/modals/RenewTokenModal";
import { DashBoardContainer } from "../components/Dashboard/styles";
//components
import { DashboardHeader } from "../components/Dashboard/components/Header/index";
import { TasksSection } from "../components/Dashboard/components/Tasks/i";
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
    return (_jsxs(DashBoardContainer, { children: [displayRenewAccessTokenModal === true && _jsx(RenewTokenModal, {}), _jsx(DashboardHeader, {}), _jsx(TasksSection, {})] }));
};
