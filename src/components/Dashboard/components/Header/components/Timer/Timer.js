//description: this component is a timer that shows the current date and time
//format: 12:00 PM, 1st of January, 2021
import * as React from "react";
// hooks
import { useTimer } from '../../../../../../hooks/customTimerHook';
// styles
import { TimerContainer } from "./styles";
export const Timer = () => {
    const time = useTimer();
    return (React.createElement(TimerContainer, null,
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
};
