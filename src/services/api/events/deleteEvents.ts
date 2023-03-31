
import { API } from "aws-amplify";
import { errorsHandler } from "../../helpers/errorsHandler";



export const deleteEvents = (event: { id?: string, dayOfWeek?: string }) =>
    ({ setDeleteEventsResponse, setFetchingLoading, setDisplayErrorModal, setCreateIsLoading }: { setDeleteEventsResponse: any, setFetchingLoading: any, setDisplayErrorModal: any, setCreateIsLoading?: any }) => {
       
        if (event.id) {
            setFetchingLoading(true);
            try {
                API.del('plannerprojectapi', `/events/${JSON.parse(localStorage.getItem('user')!).sub}/id/${event.id}`, {
                    headers: {
                        Authorization: localStorage.getItem('sessionToken')
                      
                    }
                }).then((res) => {
                    setDeleteEventsResponse(res);
                    setFetchingLoading(false);
                }).catch((err) => {
                    
                    setFetchingLoading(false);
                    setDisplayErrorModal(err.message);
                    setDeleteEventsResponse(err.message);
                })
            } catch (err:any) {
                
                setFetchingLoading(false);
                setDisplayErrorModal(err.message);
                setDeleteEventsResponse(err.message);
            }
        }
        else if (event.dayOfWeek) {
            setFetchingLoading(true);
            try {
                API.del('plannerprojectapi', `/events/${JSON.parse(localStorage.getItem('user')!).sub}/dayOfWeek/${event.dayOfWeek}`, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }).then((res) => {
                    setDeleteEventsResponse(res);
                    setFetchingLoading(false);
                }).catch((err) => {
                    console.log(err);
                    setFetchingLoading(false);
                    setDisplayErrorModal(err.message+' in week request');
                    setDeleteEventsResponse(err.message+' in week request');
                })
            } catch (err: any) {
                console.log(err);
                setFetchingLoading(false);
                setDisplayErrorModal(err.message+' in week request');
                setDeleteEventsResponse(err.message+' in week request');
            }
        }
        else {
            setCreateIsLoading(true);
            try {
                API.del('plannerprojectapi', `/events`, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                }).then((res) => {
                    console.log('delete response', res);
                    setDeleteEventsResponse(res);
                    setFetchingLoading(false);
                }).catch((err) => {
                    console.log(err, 'delete error');
                    setFetchingLoading(false);
                    setDisplayErrorModal(err.message);
                    setDeleteEventsResponse(err.message);
                })
            } catch (err: any) {
                console.log(err, 'delete catch error');
                setFetchingLoading(false);
                setDisplayErrorModal(err.message);
                setDeleteEventsResponse(err.message);
            }
        }

    }

    //         }
    //     }
    //     else {
    //         setCreateIsLoading(true);
    //         axios.delete(`${BaseUrl}/events?dayOfWeek=${event.dayOfWeek}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, data: event }).then((res) => {
    //             // setGetEventsResponse(res.data);
                
    //             console.log('a', res);
    //             setCreateIsLoading(false);
    //             setDeleteEventsResponse(res);

    //             setFetchingLoading(false);

    //         }).catch((err) => {

    //             setFetchingLoading(false);
    //             setDisplayErrorModal(err.response.data.status);
    //             setDeleteEventsResponse(err.response.data);
    //         })
    //     }

    // }