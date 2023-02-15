//description: this component is a timer that shows the current date and time
//format: 12:00 PM, 1st of January, 2021
// hooks
// import { useState, useEffect } from "react";
// styles
import { useTimer } from "../../../custom-hooks/customTimerHook";
import { TimerContainer } from "./TimerContainer";


// Description: this custom hook is used to get the time and date
//hooks
import { useEffect, useState } from "react";
//variables
// types
type Time = {
    month: string;
    day: string;
    year: number;
    hoursMin: string;
};

const Timer = () => {
	const [time, setTime] = useState<Time>({} as Time);
	console.log(time);
	const [firstRender, setFirstRender] = useState(true);
	if (firstRender === true) {
		console.log("first render");
           setFirstRender(false);
		const date = new Date();
		const day =
			date.getDate() +
			(date.getDate() % 10 === 1 && date.getDate() !== 11
				? "st"
				: date.getDate() % 10 === 2 && date.getDate() !== 12
				? "nd"
				: date.getDate() % 10 === 3 && date.getDate() !== 13
				? "rd"
				: "th");
		const month = date.toLocaleString("en-Us", { month: "long" });
		const year = date.getFullYear();
		let hoursMin =
			(date.getHours() < 10 ? "0" : "") +
			date.getHours() +
			":" +
			((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());

		setTime({ month, day, year, hoursMin });
		
	}

	
	useEffect(() => {
	
		const timer = setInterval(() => {
			const date = new Date();
			const day =
				date.getDate() +
				(date.getDate() % 10 === 1 && date.getDate() !== 11
					? "st"
					: date.getDate() % 10 === 2 && date.getDate() !== 12
					? "nd"
					: date.getDate() % 10 === 3 && date.getDate() !== 13
					? "rd"
					: "th");
			const month = date.toLocaleString("en-Us", { month: "long" });
			const year = date.getFullYear();
			let hoursMin =
				(date.getHours() < 10 ? "0" : "") +
				date.getHours() +
				":" +
				((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());

			setTime({ month, day, year, hoursMin });
			//time every 10 seconds
		}, 10000 );

		return () => {
			clearInterval(timer);
		
	}
	}, [time]);
	
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

export default Timer;
