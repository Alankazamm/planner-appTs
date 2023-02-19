import axiosInstance from "../../helpers/axios";


export const deleteEvents = (event: { id?: string, dayOfWeek?: string }) => 
({setGetEventsResponse, setFetchingLoading, setDisplayErrorModal, setCreateIsLoading}:{setGetEventsResponse:any,setFetchingLoading:any, setDisplayErrorModal:any, setCreateIsLoading?:any}) =>{
    setFetchingLoading(true);
    if (event.id) {
        axiosInstance.delete(`/events/${event.id}`, { data: event }).then((res) => {
            
                
               
          
           
        }).catch((err) => {
            console.log(err.response.data);
           
            setDisplayErrorModal(err.response.data.status);
            setGetEventsResponse(err.response.data);
        })
    }
    else {
        setCreateIsLoading(true);
        axiosInstance.delete(`/events?dayOfWeek=${event.dayOfWeek}`, { data: event }).then((res) => {
           
                setCreateIsLoading(false)
               
            
        }).catch((err) => {
           
            setDisplayErrorModal(err.response.data.status);
            setGetEventsResponse(err.response.data);
        })
    }
            
    // axiosInstance.post('/events', event).then((res) => {
    //    
    //     
    // }).catch((err) => {
    //    
    //     setDisplayErrorModal(err.response.data.status);
    //     setGetEventsResponse(err.response.data);
    // })
}