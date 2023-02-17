// description: This component is responsible for fetching the weather data
//from the API(https://www.weatherapi.com/docs/) and displaying it on the dashboard

//hooks

// assets
import errorIcon from "/src/assets/svg/weather-404.svg";
import cloudyIcon from "/src/assets/svg/weather-200.svg";
//styles
import { useFetchWeather } from "../../../../custom-hooks/customWeatherHook";
import { WeatherContainer } from "./WeatherContainer";
import { useContext } from 'react';
import { UserContext } from "../../../../contexts/UserContext";
//types

export const Weather = () => {
	const { formState } = useContext(UserContext);
	console.log("forms",formState);
    const city = 'Lisbon'
    const country = 'Portugal'
    const forecast:any = useFetchWeather(city);

	let forecastOutput = (
		<WeatherContainer>
			{" "}
			<span>Weather not avaliabe</span>{" "}
			<div>
				<img src={errorIcon} alt=""></img>
			</div>
		</WeatherContainer>
    );
    //check if forecast is of type Forecast

	if (forecast?.current?.temp_c) {
		forecastOutput = (
			<WeatherContainer>
				<span>
					{city} - {country}{" "}
				</span>{" "}
				<div>
					<img src={cloudyIcon} alt=""></img>
					{parseInt(forecast.current!.temp_c)}°
				</div>{" "}
			</WeatherContainer>
		);
	}
	return <>{forecastOutput}</>;
};

export default Weather;
