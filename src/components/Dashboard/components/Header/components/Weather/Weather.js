import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
//hooks
import { useFetchWeather } from '../../../../../../custom-hooks/customWeatherHook';
// assets
import cloudyIcon from "/src/assets/svg/weather-200.svg";
import spinner from "/src/assets/svg/spinner-uol.svg";
import errorIcon from "/src/assets/svg/weather-404.svg";
//styles
import { WeatherContainer } from "./styles";
import Spinner from "../../../../../common/loading/Spinner.styles";
export const Weather = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const city = user.city;
    const country = user.country;
    const forecast = useFetchWeather(city ? city : '');
    let forecastOutput = (_jsx(WeatherContainer, { children: _jsxs(Spinner, { children: [" ", _jsx("img", { alt: "loading", src: spinner })] }) }));
    if (forecast?.current?.temp_c) {
        forecastOutput = (_jsxs(WeatherContainer, { children: [_jsxs("span", { children: [city, " - ", country, " "] }), " ", _jsxs("div", { children: [_jsx("img", { src: cloudyIcon, alt: "" }), parseInt(forecast.current.temp_c), "\u00B0"] }), " "] }));
    }
    else if (forecast?.error) {
        forecastOutput = (_jsxs(WeatherContainer, { children: [" ", _jsx("span", { children: "Weather not avaliabe" }), " ", _jsx("div", { children: _jsx("img", { src: errorIcon, alt: "" }) })] }));
    }
    return _jsx(_Fragment, { children: forecastOutput });
};
