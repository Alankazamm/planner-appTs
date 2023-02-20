import axios from "axios";
import { BaseUrl } from "../../helpers/axios";



export const createEvents = (event: { description: string, dayOfWeek: string }) => 
({setCreateEventResponse, setCreateIsLoading, setDisplayErrorModal}:{setCreateEventResponse:any,setCreateIsLoading:any, setDisplayErrorModal:any}) =>{
    const token = localStorage.getItem('token');
    setCreateIsLoading(true);
    console.log(token);
    axios.post(`${BaseUrl}/events`, { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YyOGQ3NmU5MGZkMjM0MzViN2E5OGIiLCJpYXQiOjE2NzY4NDAzMTksImV4cCI6MTY3Njg3NjMxOX0.jBRQQ1WNSmCwJbt6oD6ShuRlyIQdcDH8psunBHhDhEk`, "Content-Type": "application/json" } ,  data: event }).then((res) => {
        setCreateIsLoading(false);
        setCreateEventResponse(res);
    }).catch((err) => {
        console.log(token);
        console.log(err.data);
        setCreateIsLoading(false);
        setDisplayErrorModal(err.response.data.status);
        setCreateEventResponse(err.response.data);
    })
    console.log(token);
    }
