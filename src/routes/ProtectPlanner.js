System.register(["react-router-dom", "react", "../pages/Planner"], function (exports_1, context_1) {
    "use strict";
    var react_router_dom_1, React, Planner_1, ProtectPlanner;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_router_dom_1_1) {
                react_router_dom_1 = react_router_dom_1_1;
            },
            function (React_1) {
                React = React_1;
            },
            function (Planner_1_1) {
                Planner_1 = Planner_1_1;
            }
        ],
        execute: function () {
            exports_1("ProtectPlanner", ProtectPlanner = () => {
                //navigate to login page if there is no token in local storage
                return (React.createElement(React.Fragment, null, localStorage.getItem('token') ? React.createElement(Planner_1.Planner, null) : React.createElement(react_router_dom_1.Navigate, { to: "/login" })));
            });
        }
    };
});
//# sourceMappingURL=ProtectPlanner.js.map