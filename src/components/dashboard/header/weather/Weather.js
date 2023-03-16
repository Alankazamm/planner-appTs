import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    const user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    const city = user.city;
    const country = user.country;
    const forecast = useFetchWeather(city ? city : '');
    let forecastOutput = (_jsx(WeatherContainer, { children: _jsxs(Spinner, { children: [" ", _jsx("img", { src: spinner })] }) }));
    // (
    // 	<WeatherContainer>
    // 		
    // 	</WeatherContainer>
    // );
    //check if forecast is of type Forecast
    if (forecast?.current?.temp_c) {
        forecastOutput = (_jsxs(WeatherContainer, { children: [_jsxs("span", { children: [city, " - ", country, " "] }), " ", _jsxs("div", { children: [_jsx("img", { src: cloudyIcon, alt: "" }), parseInt(forecast.current.temp_c), "\u00B0"] }), " "] }));
    }
    else if (forecast?.error) {
        forecastOutput = (_jsxs(WeatherContainer, { children: [" ", _jsx("span", { children: "Weather not avaliabe" }), " ", _jsx("div", { children: _jsx("img", { src: errorIcon, alt: "" }) })] }));
    }
    return _jsx(_Fragment, { children: forecastOutput });
};
export default Weather;
