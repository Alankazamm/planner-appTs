"use strict";
//description: this component is a timer that shows the current date and time
//format: 12:00 PM, 1st of January, 2021
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
// hooks
const customTimerHook_1 = require("./../../../../../../custom-hooks/customTimerHook");
// styles
const styles_1 = require("./styles");
const react_1 = __importDefault(require("react"));
const Timer = () => {
    const time = (0, customTimerHook_1.useTimer)();
    return (<styles_1.TimerContainer>
			<div className="hour">{time.hoursMin}</div>
			<div className="date">
				<span>{time.month}</span>
				<span> </span>
				<span>{time.day}, </span>
				<span> {time.year}</span>
			</div>
		</styles_1.TimerContainer>);
};
exports.Timer = Timer;
