System.register(["react-router-dom", "./contexts/usersContext", "./routes/AppRoutes", "aws-amplify", "./aws-exports", "./styles", "react"], function (exports_1, context_1) {
    "use strict";
    var react_router_dom_1, usersContext_1, AppRoutes_1, aws_amplify_1, aws_exports_1, styles_1, React;
    var __moduleName = context_1 && context_1.id;
    function App() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(styles_1.GlobalStyle, null),
            React.createElement(usersContext_1.UserContextProvider, null,
                React.createElement(AppRoutes_1.AppRoutes, null))));
    }
    return {
        setters: [
            function (react_router_dom_1_1) {
                react_router_dom_1 = react_router_dom_1_1;
            },
            function (usersContext_1_1) {
                usersContext_1 = usersContext_1_1;
            },
            function (AppRoutes_1_1) {
                AppRoutes_1 = AppRoutes_1_1;
            },
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
            },
            function (aws_exports_1_1) {
                aws_exports_1 = aws_exports_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            aws_amplify_1.Auth.configure(aws_exports_1.default);
            exports_1("default", App);
        }
    };
});
//# sourceMappingURL=App.js.map