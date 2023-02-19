import axiosInstance from "../../helpers/axios";


export const createEvents = (event: { description: string, dayOfWeek: string }) => 
({setCreateEventResponse, setCreateIsLoading, setDisplayErrorModal}:{setCreateEventResponse:any,setCreateIsLoading:any, setDisplayErrorModal:any}) =>{
    setCreateIsLoading(true);
    axiosInstance.post('/events', event).then((res) => {
        setCreateIsLoading(false);
        setCreateEventResponse(res);
    }).catch((err) => {
        setCreateIsLoading(false);
        setDisplayErrorModal(err.response.data.status);
        setCreateEventResponse(err.response.data);
    })
}