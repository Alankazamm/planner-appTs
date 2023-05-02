//description: this component is a timer that shows the current date and time
//format: 12:00 PM, 1st of January, 2021

// hooks
import { useTimer } from './../../../../../../custom-hooks/customTimerHook';
// styles
import { TimerContainer } from "./styles";

import React from "react";

export const Timer = () => {
	const time = useTimer();
	
	return (
		<TimerContainer>
			<div className="hour">{time.hoursMin}</div>
			<div className="date">
				<span>{time.month}</span>
				<span> </span>
				<span>{time.day}, </span>
				<span> {time.year}</span>
			</div>
		</TimerContainer>
	);
};

