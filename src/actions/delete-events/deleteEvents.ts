import axiosInstance from "../../helpers/axios";


export const deleteEvents = (event: { id?: string, dayOfWeek?: string }) => 
({setGetEventsResponse, setFetchingLoading, setDisplayErrorModal, setCreateIsLoading}:{setGetEventsResponse:any,setFetchingLoading:any, setDisplayErrorModal:any, setCreateIsLoading?:any}) =>{
    
    if (event.id) {
        axiosInstance.delete(`/events/${event.id}`, { data: event }).then((res) => {
            setFetchingLoading(true);
            setGetEventsResponse(res.data);
            setTimeout(() => {
                
                setFetchingLoading(false);
            }, 3000);
           
        }).catch((err) => {
            console.log(err.response.data);
            setFetchingLoading(false);
            setDisplayErrorModal(err.response.data.status);
            setGetEventsResponse(err.response.data);
        })
    }
    else {
        
        axiosInstance.delete(`/events?dayOfWeek=${event.dayOfWeek}`, { data: event }).then((res) => {
            setCreateIsLoading(true);
            setGetEventsResponse(res.data);

            setTimeout(() => {
                setCreateIsLoading(false)
                setFetchingLoading(false);
            }, 1000);
        }).catch((err) => {
            setFetchingLoading(false);
            setDisplayErrorModal(err.response.data.status);
            setGetEventsResponse(err.response.data);
        })
    }
            
    // axiosInstance.post('/events', event).then((res) => {
    //     setFetchingLoading(false);
    //     
    // }).catch((err) => {
    //     setFetchingLoading(false);
    //     setDisplayErrorModal(err.response.data.status);
    //     setGetEventsResponse(err.response.data);
    // })
}