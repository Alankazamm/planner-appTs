//styles
import { useContext, useEffect } from "react";
import { RenewTokenModal } from "../components/common/modals/RenewTokenModal";
import { DashBoardContainer } from "../components/Dashboard/styles";
//components
import React from "react";
import { UserContext } from './../contexts/userContext';
import { DashboardHeader } from "../components/Dashboard/components/Header/Header";
import { TasksSection } from "../components/Dashboard/components/Tasks/TasksSection";
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
    return (React.createElement(DashBoardContainer, null,
        displayRenewAccessTokenModal === true && React.createElement(RenewTokenModal, null),
        React.createElement(DashboardHeader, null),
        React.createElement(TasksSection, null)));
};
