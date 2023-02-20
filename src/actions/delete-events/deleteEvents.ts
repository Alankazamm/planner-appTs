import axios from "axios";
import { BaseUrl } from './../../helpers/axios';



export const deleteEvents = (event: { id?: string, dayOfWeek?: string }) =>
    ({ setDeleteEventsResponse, setFetchingLoading, setDisplayErrorModal, setCreateIsLoading }: { setDeleteEventsResponse: any, setFetchingLoading: any, setDisplayErrorModal: any, setCreateIsLoading?: any }) => {

        if (event.id) {
            setFetchingLoading(true);
            axios.delete(`${BaseUrl}/events/${event.id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, data: event }).then((res) => {
                setFetchingLoading(false);
            }).catch((err) => {
                console.log(err.response.data);
                setFetchingLoading(false);
                setDisplayErrorModal(err.response.data.status);
                setDeleteEventsResponse(err.response.data);
            })
        }
        else {
            setCreateIsLoading(true);
            console.log(event);
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
            })
        }

    }