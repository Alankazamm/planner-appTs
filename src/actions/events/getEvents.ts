import axiosInstance from "../../helpers/axios";


export const getEvents = (event: { description?: string, dayOfWeek?: string }) =>
    ({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal }:
        { setGetEventsResponse: any, setFetchingLoading: any, setDisplayErrorModal:any }) => {
        console.log(event);
        
    setFetchingLoading(true);
    if (event.dayOfWeek) {
        axiosInstance.get(`/events?dayOfWeek=${event.dayOfWeek}`, { data: event }).then((res) => {
            console.log(res);
            setGetEventsResponse(res);
            setFetchingLoading(false);
        }).catch((err) => {
            setGetEventsResponse(err.response.data);
            setDisplayErrorModal(err.response.data.status);
            setFetchingLoading(false);
        })
    }
    else {
        axiosInstance.get(`/events`, { data: event }).then((res) => {
            console.log(res);
            setGetEventsResponse(res);
            setFetchingLoading(false);
        }).catch((err) => {
            setGetEventsResponse(err.response.data);
            setDisplayErrorModal(err.response.data.status);
            setFetchingLoading(false);
        })
    }
}