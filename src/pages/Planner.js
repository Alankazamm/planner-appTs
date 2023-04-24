System.register(["react", "../components/Dashboard/styles", "../components/Dashboard", "../components/common/Modals/components/RenewTokenModal", "../contexts/usersContext"], function (exports_1, context_1) {
    "use strict";
    var React, react_1, styles_1, Dashboard_1, RenewTokenModal_1, usersContext_1, Planner;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
                react_1 = React_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (Dashboard_1_1) {
                Dashboard_1 = Dashboard_1_1;
            },
            function (RenewTokenModal_1_1) {
                RenewTokenModal_1 = RenewTokenModal_1_1;
            },
            function (usersContext_1_1) {
                usersContext_1 = usersContext_1_1;
            }
        ],
        execute: function () {
            exports_1("Planner", Planner = () => {
                const { displayRenewAccessTokenModal, setDisplayRenewAccessTokenModal } = react_1.useContext(usersContext_1.UserContext);
                react_1.useEffect(() => {
                    const time = localStorage.getItem('sessionExpires');
                    const timer = setTimeout(() => {
                        setDisplayRenewAccessTokenModal(true);
                    }, time ? parseInt(time) - 100000 : 100000);
                    return () => clearTimeout(timer);
                }, [setDisplayRenewAccessTokenModal, displayRenewAccessTokenModal]);
                return (React.createElement(styles_1.DashBoardContainer, null,
                    displayRenewAccessTokenModal === true && React.createElement(RenewTokenModal_1.RenewTokenModal, null),
                    React.createElement(Dashboard_1.DashboardHeader, null),
                    React.createElement(Dashboard_1.TasksSection, null)));
            });
        }
    };
});
//# sourceMappingURL=Planner.js.map