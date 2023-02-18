import axiosInstance from "../../helpers/axios";


export const createEvents = (event: { description: string, dayOfWeek: string }) => 
({setCreateEventResponse, setCreateIsLoading}:{setCreateEventResponse:any,setCreateIsLoading:any}) =>{
    setCreateIsLoading(true);
    axiosInstance.post('/events', event).then((res) => {
        setCreateIsLoading(false);
        setCreateEventResponse(res);
    }).catch((err) => {
        setCreateIsLoading(false);
        setCreateEventResponse(err.response.data);
    })
}