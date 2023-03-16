import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//description: this component is a timer that shows the current date and time
//format: 12:00 PM, 1st of January, 2021
// hooks
// import { useState, useEffect } from "react";
// styles
import { useTimer } from "../../../../custom-hooks/customTimerHook";
import { TimerContainer } from "./TimerContainer";
const Timer = () => {
    const time = useTimer();
    return (_jsxs(TimerContainer, { children: [_jsx("div", { className: "hour", children: time.hoursMin }), _jsxs("div", { className: "date", children: [_jsx("span", { children: time.month }), _jsx("span", { children: " " }), _jsxs("span", { children: [time.day, ", "] }), _jsxs("span", { children: [" ", time.year] })] })] }));
};
export default Timer;
