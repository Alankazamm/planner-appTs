// description: This component is responsible for fetching the weather data
//from the API(https://www.weatherapi.com/docs/) and displaying it on the dashboard

//hooks
import { useFetchWeather } from "../../../../custom-hooks/customWeatherHook";

// assets
const cloudyIcon = require("/src/assets/svg/icon-cloudy.svg");
const spinner = require("/src/assets/svg/spinner.svg");
const errorIcon = require("/src/assets/svg/icon-error.svg");
//styles
import { WeatherContainer } from "./WeatherContainer";
import Spinner from './../../../common/loading/Spinner.styles';


const Weather = () => {

	const user = JSON.parse(localStorage.getItem('loggedUser') || '{}')
	const city: string | undefined = user.city;
    const country: string | undefined = user.country;
    const forecast:any = useFetchWeather(city?city:'');
	
	let forecastOutput = (
		<WeatherContainer>
			<Spinner> <img src={spinner}></img></Spinner>
		</WeatherContainer>
	);
	// (
	// 	<WeatherContainer>
	// 		
	// 	</WeatherContainer>
    // );
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
	else if (forecast?.error) {
		forecastOutput = (
			<WeatherContainer>
				{" "}
	 		<span>Weather not avaliabe</span>{" "}
	 		<div>
	 			<img src={errorIcon} alt=""></img>
			</div>
			</WeatherContainer>
		);
	}
	return <>{forecastOutput}</>;
};

export default Weather;
