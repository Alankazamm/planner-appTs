import axiosInstance from "../../helpers/axios";


export const getEvents = (event: { description?: string, dayOfWeek?: string }) => (setGetEventsResponse:any) => {
    axiosInstance.get('/events', { data: event }).then((res) => {
        console.log(res);
       setGetEventsResponse(res);
    }).catch((err) => {
        setGetEventsResponse(err.response.data);
    })
}