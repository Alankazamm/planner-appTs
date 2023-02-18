import axiosInstance from "../../helpers/axios";


export const getEvents = (event: { description?: string, dayOfWeek?: string }) => (setGetEventsResponse: any) => {
    console.log(event);
    
    if (event.dayOfWeek) {
        axiosInstance.get(`/events?dayOfWeek=${event.dayOfWeek}`, { data: event }).then((res) => {
            console.log(res);
           setGetEventsResponse(res);
        }).catch((err) => {
            setGetEventsResponse(err.response.data);
        })
    }
    else {
        axiosInstance.get(`/events`, { data: event }).then((res) => {
            console.log(res);
           setGetEventsResponse(res);
        }).catch((err) => {
            setGetEventsResponse(err.response.data);
        })
    }
}