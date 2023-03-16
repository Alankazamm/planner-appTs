import axios from 'axios';
import { BaseUrl } from './../../helpers/axios';
export const getEvents = (event) => ({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal }) => {
    setFetchingLoading(true);
    if (event.dayOfWeek) {
        axios.get(`${BaseUrl}/events?dayOfWeek=${event.dayOfWeek}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, data: event }).then((res) => {
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
        });
    }
    else {
        axios.get(`/events`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, data: event }).then((res) => {
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
        });
    }
};
