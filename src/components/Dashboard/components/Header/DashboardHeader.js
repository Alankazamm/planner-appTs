//description: This is the header component for the dashboard page
//it contains the header text, timer, weather and the logout button
System.register(["./components/Timer", "./components/Weather", "./components/Logout", "./styles", "../../../common/Header", "react"], function (exports_1, context_1) {
    "use strict";
    var Timer_1, Weather_1, Logout_1, styles_1, Header_1, React, DashboardHeader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Timer_1_1) {
                Timer_1 = Timer_1_1;
            },
            function (Weather_1_1) {
                Weather_1 = Weather_1_1;
            },
            function (Logout_1_1) {
                Logout_1 = Logout_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (Header_1_1) {
                Header_1 = Header_1_1;
            },
            function (React_1) {
                React = React_1;
            }
        ],
        execute: function () {
            exports_1("DashboardHeader", DashboardHeader = () => {
                return (React.createElement(styles_1.DashHeaderContainer, null,
                    React.createElement(Header_1.HeaderText, { page: "dashboard", title: "Weekly Planner", description: "Use this planner to organize your daily issues" }),
                    React.createElement(Timer_1.Timer, null),
                    React.createElement(Weather_1.Weather, null),
                    React.createElement(Logout_1.Logout, null)));
            });
        }
    };
});
//# sourceMappingURL=DashboardHeader.js.map