"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
// description: This component is responsible for fetching the weather data
//from the API(https://www.weatherapi.com/docs/) and displaying it on the dashboard
const React = __importStar(require("react"));
//hooks
const customWeatherHook_1 = require("../../../../../../hooks/customWeatherHook");
// assets
const weather_200_svg_1 = __importDefault(require("/src/assets/svg/weather-200.svg"));
const spinner_uol_svg_1 = __importDefault(require("/src/assets/svg/spinner-uol.svg"));
const weather_404_svg_1 = __importDefault(require("/src/assets/svg/weather-404.svg"));
//styles
const styles_1 = require("./styles");
const styles_2 = require("../../../../../../styles/");
const getUser_1 = require("./../../../../../../helpers/getUser");
const Weather = () => {
    const { city, country } = (0, getUser_1.getUser)();
    const forecast = (0, customWeatherHook_1.useFetchWeather)(city ? city : '');
    let forecastOutput = (React.createElement(styles_1.WeatherContainer, null,
        React.createElement(styles_2.Spinner, null,
            " ",
            React.createElement("img", { alt: "loading", src: spinner_uol_svg_1.default }))));
    if (forecast?.current?.temp_c) {
        forecastOutput = (React.createElement(styles_1.WeatherContainer, null,
            React.createElement("span", null,
                city,
                " - ",
                country,
                " "),
            " ",
            React.createElement("div", null,
                React.createElement("img", { src: weather_200_svg_1.default, alt: "" }),
                parseInt(forecast.current.temp_c),
                "\u00B0"),
            " "));
    }
    else if (forecast?.error) {
        forecastOutput = (React.createElement(styles_1.WeatherContainer, null,
            " ",
            React.createElement("span", null, "Weather not avaliabe"),
            " ",
            React.createElement("div", null,
                React.createElement("img", { src: weather_404_svg_1.default, alt: "" }))));
    }
    return React.createElement(React.Fragment, null, forecastOutput);
};
exports.Weather = Weather;
//# sourceMappingURL=Weather.js.map