System.register(["react-router-dom", "../pages/LogIn", "../pages/SignUp", "./ProtectPlanner", "react"], function (exports_1, context_1) {
    "use strict";
    var react_router_dom_1, LogIn_1, SignUp_1, ProtectPlanner_1, React, AppRoutes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_router_dom_1_1) {
                react_router_dom_1 = react_router_dom_1_1;
            },
            function (LogIn_1_1) {
                LogIn_1 = LogIn_1_1;
            },
            function (SignUp_1_1) {
                SignUp_1 = SignUp_1_1;
            },
            function (ProtectPlanner_1_1) {
                ProtectPlanner_1 = ProtectPlanner_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            exports_1("AppRoutes", AppRoutes = () => {
                return (React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(SignUp_1.SignUp, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/login', element: React.createElement(LogIn_1.LogIn, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/signup', element: React.createElement(SignUp_1.SignUp, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '/planner', element: React.createElement(ProtectPlanner_1.ProtectPlanner, null) }),
                    React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement("h1", null, "404") })));
            });
        }
    };
});
//# sourceMappingURL=AppRoutes.js.map