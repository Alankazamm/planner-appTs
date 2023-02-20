
import { axiosInstance, updateToken } from './../../helpers/axios';


export const getEvents = (event: { description?: string, dayOfWeek?: string }) =>
    ({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal }:
        { setGetEventsResponse: any, setFetchingLoading: any, setDisplayErrorModal: any }) => {
        console.log(event);
        updateToken(localStorage.getItem('token')!);
        console.log('token', localStorage.getItem('token'));

        setFetchingLoading(true);
        if (event.dayOfWeek) {
            axiosInstance.get(`/events?dayOfWeek=${event.dayOfWeek}`, { data: event }).then((res) => {
                console.log(res);
                setGetEventsResponse(res);


                setFetchingLoading(false);
                //8 secs in milliseconds is


            }).catch((err) => {
                setGetEventsResponse(err.response.data);
                setDisplayErrorModal(err.response.data.status);


                setFetchingLoading(false);
                //set 10 seconds to show the loading

            })
        }
        else {
            axiosInstance.get(`/events`, { data: event }).then((res) => {
                console.log(res);
                setGetEventsResponse(res);
                setTimeout(() => {

                    setFetchingLoading(false);
                    //set 10 seconds to show the loading
                }, 1000);
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