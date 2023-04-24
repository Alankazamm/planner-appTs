System.register(["react"], function (exports_1, context_1) {
    "use strict";
    var react_1, API_KEY, useFetchWeather;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            ;
            API_KEY = context_1.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
            exports_1("useFetchWeather", useFetchWeather = (city) => {
                //hooks
                const [forecast, setForecast] = react_1.useState();
                //fetching weather data from the API when the component mounts todo: add a custom hook for this
                const [firstTime, setFirstTime] = react_1.useState(true);
                react_1.useEffect(() => {
                    if (firstTime === true) {
                        try {
                            fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=en`)
                                .then((response) => response.status === 200 ? response.json() : console.log(response))
                                .then(data => {
                                console.log(data);
                                setForecast(data);
                            });
                        }
                        catch (error) {
                            setForecast(error);
                        }
                        setFirstTime(false);
                    }
                    else {
                        const weatherUpdate = setInterval(() => {
                            try {
                                fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=en`)
                                    .then((response) => response.status === 200 ? response.json() : console.log(response.status))
                                    .then(data => {
                                    setForecast(data);
                                });
                            }
                            catch (error) {
                                setForecast(error);
                            }
                            //time 15 minutes
                        }, 900000);
                        return () => clearInterval(weatherUpdate);
                    }
                }, [forecast]);
                return forecast;
            });
        }
    };
});
//# sourceMappingURL=customWeatherHook.js.map