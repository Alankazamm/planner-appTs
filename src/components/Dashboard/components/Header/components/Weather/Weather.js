// description: This component is responsible for fetching the weather data
//from the API(https://www.weatherapi.com/docs/) and displaying it on the dashboard
import * as React from "react";
//hooks
import { useFetchWeather } from '../../../../../../hooks/customWeatherHook';
// assets
import cloudyIcon from "/src/assets/svg/weather-200.svg";
import spinner from "/src/assets/svg/spinner-uol.svg";
import errorIcon from "/src/assets/svg/weather-404.svg";
//styles
import { WeatherContainer } from "./styles";
import { Spinner } from "../../../../../../styles/";
import { getUser } from './../../../../../../helpers/getUser';
export const Weather = () => {
    const { city, country } = getUser();
    const forecast = useFetchWeather(city ? city : '');
    let forecastOutput = (React.createElement(WeatherContainer, null,
        React.createElement(Spinner, null,
            " ",
            React.createElement("img", { alt: "loading", src: spinner }))));
    if (forecast?.current?.temp_c) {
        forecastOutput = (React.createElement(WeatherContainer, null,
            React.createElement("span", null,
                city,
                " - ",
                country,
                " "),
            " ",
            React.createElement("div", null,
                React.createElement("img", { src: cloudyIcon, alt: "" }),
                parseInt(forecast.current.temp_c),
                "\u00B0"),
            " "));
    }
    else if (forecast?.error) {
        forecastOutput = (React.createElement(WeatherContainer, null,
            " ",
            React.createElement("span", null, "Weather not avaliabe"),
            " ",
            React.createElement("div", null,
                React.createElement("img", { src: errorIcon, alt: "" }))));
    }
    return React.createElement(React.Fragment, null, forecastOutput);
};
//# sourceMappingURL=Weather.js.map