
import axios from 'axios';

export const getEvents = (event: { description?: string, dayOfWeek?: string }) =>
    ({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal }:
        { setGetEventsResponse: any, setFetchingLoading: any, setDisplayErrorModal: any }) => {
        const BaseUrl = import.meta.env.VITE_REACT_API_URL;
        let headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        
        }
             const axiosInstance = axios.create({
                baseURL: BaseUrl,
                headers,
            });
            

        setFetchingLoading(true);
        if (event.dayOfWeek) {
            axiosInstance.get(`/events?dayOfWeek=${event.dayOfWeek}`, { data: event }).then((res) => {
                console.log(res);
                setGetEventsResponse(res);

setTimeout(() => {
                setFetchingLoading(false);
                //8 secs in milliseconds is
            }, 1000);


            }).catch((err) => {
                setGetEventsResponse(err.response.data);
                setDisplayErrorModal(err.response.data.status);

setTimeout(() => {
                setFetchingLoading(false);
                //set 10 seconds to show the loading
            }, 1111);
            })
        }
        else {
            axiosInstance.get(`/events`, { data: event }).then((res) => {
                console.log(res);
                setGetEventsResponse(res);
                setTimeout(() => {

                    setFetchingLoading(false);
                    //set 10 seconds to show the loading
                }, 11000);
            }).catch((err) => {
                setGetEventsResponse(err.response.data);
                setDisplayErrorModal(err.response.data.status);
                setTimeout(() => {

                    setFetchingLoading(false);
                    //set 10 seconds to show the loading
                }, 1000);
            })
        }
    }