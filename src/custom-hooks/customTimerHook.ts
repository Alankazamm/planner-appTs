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
export const useTimer = () => {
   //state that will return the time and date
	const [time, setTime] = useState<Time>({} as Time);
	const [firstRender, setFirstRender] = useState(true);
	
    //description: this useEffect is used to set the time and date
    //it is also used to update the time every 10 seconds
    useEffect(() => {
        if (firstRender) {
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
			
			
		} else {
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
			};
		}
    }, [firstRender]);

    return time;
};