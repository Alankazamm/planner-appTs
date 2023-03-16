import axios from "axios";
import { BaseUrl } from './../../helpers/axios';
export const deleteEvents = (event) => ({ setDeleteEventsResponse, setFetchingLoading, setDisplayErrorModal, setCreateIsLoading }) => {
    if (event.id) {
        setFetchingLoading(true);
        axios.delete(`${BaseUrl}/events/${event.id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, data: event }).then((res) => {
            setFetchingLoading(false);
            setDeleteEventsResponse(res);
        }).catch((err) => {
            console.log(err.response.data);
            setFetchingLoading(false);
            setDisplayErrorModal(err.response.data.status);
            setDeleteEventsResponse(err.response.data);
        });
    }
    else {
        setCreateIsLoading(true);
        axios.delete(`${BaseUrl}/events?dayOfWeek=${event.dayOfWeek}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, data: event }).then((res) => {
            // setGetEventsResponse(res.data);
            console.log('a', res);
            setCreateIsLoading(false);
            setDeleteEventsResponse(res);
            setFetchingLoading(false);
        }).catch((err) => {
            setFetchingLoading(false);
            setDisplayErrorModal(err.response.data.status);
            setDeleteEventsResponse(err.response.data);
        });
    }
};
