System.register(["react", "../../../../../../hooks/customWeatherHook", "/src/assets/svg/weather-200.svg", "/src/assets/svg/spinner-uol.svg", "/src/assets/svg/weather-404.svg", "./styles", "../../../../../../styles/", "./../../../../../../helpers/getUser"], function (exports_1, context_1) {
    "use strict";
    var React, customWeatherHook_1, weather_200_svg_1, spinner_uol_svg_1, weather_404_svg_1, styles_1, styles_2, getUser_1, Weather;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (customWeatherHook_1_1) {
                customWeatherHook_1 = customWeatherHook_1_1;
            },
            function (weather_200_svg_1_1) {
                weather_200_svg_1 = weather_200_svg_1_1;
            },
            function (spinner_uol_svg_1_1) {
                spinner_uol_svg_1 = spinner_uol_svg_1_1;
            },
            function (weather_404_svg_1_1) {
                weather_404_svg_1 = weather_404_svg_1_1;
            },
            function (styles_1_1) {
                styles_1 = styles_1_1;
            },
            function (styles_2_1) {
                styles_2 = styles_2_1;
            },
            function (getUser_1_1) {
                getUser_1 = getUser_1_1;
            }
        ],
        execute: function () {
            exports_1("Weather", Weather = () => {
                const { city, country } = getUser_1.getUser();
                const forecast = customWeatherHook_1.useFetchWeather(city ? city : '');
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
            });
        }
    };
});
//# sourceMappingURL=Weather.js.map