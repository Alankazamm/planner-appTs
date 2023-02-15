// description: This component is responsible for fetching the weather data
//from the API(https://www.weatherapi.com/docs/) and displaying it on the dashboard

//hooks
import { useState, useEffect } from "react";
// assets
import errorIcon from "/src/assets/svg/weather-404.svg";
import cloudyIcon from "/src/assets/svg/weather-200.svg";
//styles
import { useFetchWeather } from "../../../custom-hooks/customWeatherHook";
import { WeatherContainer } from "./WeatherContainer";

const Weather = () => {
	// let {firstTime} = useContext(UserContext);
	const [forecast, setForecast] = useState<any>(undefined);
	//fetching city and country from local storage
	let city: string | null = localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")!).city
		: null;
	let country: string | null = localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")!).country
		: null;

	//fetching weather data from the custom hook
    if (city === null || country === null) {
        city = "London";
        country = "UK";
    }
	const fetchWeather = useFetchWeather(city!);
	useEffect(() => {
		setForecast(fetchWeather);
	}, [fetchWeather]);

	let forecastOutput = (
		<WeatherContainer>
			{" "}
			<span>Weather not avaliabe</span>{" "}
			<div>
				<img src={errorIcon} alt=""></img>
			</div>
		</WeatherContainer>
	);
	if (forecast) {
		forecastOutput = (
			<WeatherContainer>
				<span>
					{city} - {country}{" "}
				</span>{" "}
				<div>
					<img src={cloudyIcon} alt=""></img>
					{parseInt(forecast?.current?.temp_c)}°
				</div>{" "}
			</WeatherContainer>
		);
	}
	return <>{forecastOutput}</>;
};

export default Weather;
