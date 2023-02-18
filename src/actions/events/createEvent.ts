import axiosInstance from "../../helpers/axios";


export const createEvents = (event: { description: string, dayOfWeek: string }) => (setCreateEventResponse:any) =>{
    axiosInstance.post('/events', event).then((res) => {
        setCreateEventResponse(res);
    }).catch((err) => {
        setCreateEventResponse(err.response.data);
    })
}