System.register(["react", "../../../../../../hooks/customTimerHook", "./styles"], function (exports_1, context_1) {
    "use strict";
    var React, customTimerHook_1, styles_1, Timer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (customTimerHook_1_1) {
                customTimerHook_1 = customTimerHook_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            }
        ],
        execute: function () {
            exports_1("Timer", Timer = () => {
                const time = customTimerHook_1.useTimer();
                return (React.createElement(styles_1.TimerContainer, null,
                    React.createElement("div", { className: "hour" }, time.hoursMin),
                    React.createElement("div", { className: "date" },
                        React.createElement("span", null, time.month),
                        React.createElement("span", null, " "),
                        React.createElement("span", null,
                            time.day,
                            ", "),
                        React.createElement("span", null,
                            " ",
                            time.year))));
            });
        }
    };
});
//# sourceMappingURL=Timer.js.map