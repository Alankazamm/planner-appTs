import { useEffect, useState } from "react";
;
const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
export const useFetchWeather = (city) => {
    //hooks
    const [forecast, setForecast] = useState();
    //fetching weather data from the API when the component mounts todo: add a custom hook for this
    const [firstTime, setFirstTime] = useState(true);
    useEffect(() => {
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
};
