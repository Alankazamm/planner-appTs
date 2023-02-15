import { useEffect, useState } from "react";

let firstTime = true;
export const useFetchWeather = (city: string) : any => {
//hooks
console.log(city)
    const [forecast, setForecast] = useState<any>();

//fetching weather data from the API when the component mounts todo: add a custom hook for this
    useEffect(() => {
     
        if (firstTime === true) {
               console.log('useEffect');
         try {
             fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_REACT_WEATHER_API_URL}&q=${city}&lang=en`)
               .then((response) => response.status === 200 ? response.json() : console.log(response))
               .then(data => {
                 setForecast(data);
               });
           } catch (error) {
             setForecast(null);
             console.log('There was an error', error);
         }
         firstTime = false;
     } else {
         const weatherUpdate = setInterval(() => {
           
           try {
             fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_REACT_WEATHER_API_URL}&q=${city}&lang=en`)
               .then((response) => response.status === 200 ? response.json() : console.log(response.status))
               .then(data => {
                 setForecast(data);
               });
           } catch (error) {
             setForecast(null);
             console.log('There was an error', error);
             }
             //time 15 minutes
         }, 90000);
         return () => clearInterval(weatherUpdate);
     }
 
 }, [forecast]); 

    return forecast;
}