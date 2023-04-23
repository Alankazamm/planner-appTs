"use strict";
// description: This component is responsible for fetching the weather data
//from the API(https://www.weatherapi.com/docs/) and displaying it on the dashboard
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const react_1 = __importDefault(require("react"));
//hooks
const customWeatherHook_1 = require("../../../../../../custom-hooks/customWeatherHook");
// assets
const weather_200_svg_1 = __importDefault(require("/src/assets/svg/weather-200.svg"));
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const weather_404_svg_1 = __importDefault(require("/src/assets/svg/weather-404.svg"));
//styles
const styles_1 = require("./styles");
const Spinner_styles_1 = __importDefault(require("../../../../../common/loading/Spinner.styles"));
const Weather = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const city = user.city;
    const country = user.country;
    const forecast = (0, customWeatherHook_1.useFetchWeather)(city ? city : '');
    let forecastOutput = (<styles_1.WeatherContainer>
			<Spinner_styles_1.default> <img alt="loading" src={spinner_uol_svg_1.default}></img></Spinner_styles_1.default>
		</styles_1.WeatherContainer>);
    if (forecast?.current?.temp_c) {
        forecastOutput = (<styles_1.WeatherContainer>
				<span>
					{city} - {country}{" "}
				</span>{" "}
				<div>
					<img src={weather_200_svg_1.default} alt=""></img>
					{parseInt(forecast.current.temp_c)}°
				</div>{" "}
			</styles_1.WeatherContainer>);
    }
    else if (forecast?.error) {
        forecastOutput = (<styles_1.WeatherContainer>
				{" "}
	 		<span>Weather not avaliabe</span>{" "}
	 		<div>
	 			<img src={weather_404_svg_1.default} alt=""></img>
			</div>
			</styles_1.WeatherContainer>);
    }
    return <>{forecastOutput}</>;
};
exports.Weather = Weather;
