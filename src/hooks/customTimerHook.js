System.register(["react"], function (exports_1, context_1) {
    "use strict";
    var react_1, useTimer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            exports_1("useTimer", useTimer = () => {
                //state that will return the time and date
                const [time, setTime] = react_1.useState({});
                const [firstRender, setFirstRender] = react_1.useState(true);
                //description: this useEffect is used to set the time and date
                //it is also used to update the time every 10 seconds
                react_1.useEffect(() => {
                    if (firstRender) {
                        setFirstRender(false);
                        const date = new Date();
                        const day = date.getDate() +
                            (date.getDate() % 10 === 1 && date.getDate() !== 11
                                ? "st"
                                : date.getDate() % 10 === 2 && date.getDate() !== 12
                                    ? "nd"
                                    : date.getDate() % 10 === 3 && date.getDate() !== 13
                                        ? "rd"
                                        : "th");
                        const month = date.toLocaleString("en-Us", { month: "long" });
                        const year = date.getFullYear();
                        let hoursMin = (date.getHours() < 10 ? "0" : "") +
                            date.getHours() +
                            ":" +
                            ((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());
                        setTime({ month, day, year, hoursMin });
                    }
                    else {
                        const timer = setInterval(() => {
                            const date = new Date();
                            const day = date.getDate() +
                                (date.getDate() % 10 === 1 && date.getDate() !== 11
                                    ? "st"
                                    : date.getDate() % 10 === 2 && date.getDate() !== 12
                                        ? "nd"
                                        : date.getDate() % 10 === 3 && date.getDate() !== 13
                                            ? "rd"
                                            : "th");
                            const month = date.toLocaleString("en-Us", { month: "long" });
                            const year = date.getFullYear();
                            let hoursMin = (date.getHours() < 10 ? "0" : "") +
                                date.getHours() +
                                ":" +
                                ((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());
                            setTime({ month, day, year, hoursMin });
                            //time every 10 seconds
                        }, 10000);
                        return () => {
                            clearInterval(timer);
                        };
                    }
                }, [firstRender]);
                return time;
            });
        }
    };
});
//# sourceMappingURL=customTimerHook.js.map