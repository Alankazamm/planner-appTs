import { useEffect, useState } from "react";
;
export const useFetchWeather = (city) => {
    //hooks
    const [forecast, setForecast] = useState();
    //fetching weather data from the API when the component mounts todo: add a custom hook for this
    const [firstTime, setFirstTime] = useState(true);
    useEffect(() => {
        if (firstTime === true) {
            try {
                fetch(`https://api.weatherapi.com/v1/current.json?key=96292cdb0bbf468f931192735231102&q=${city}&lang=en`)
                    .then((response) => response.status === 200 ? response.json() : console.log(response))
                    .then(data => {
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
                    fetch(`https://api.weatherapi.com/v1/current.json?key=3274f2378a4045fc97835913232201&q=${city}&lang=en`)
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
