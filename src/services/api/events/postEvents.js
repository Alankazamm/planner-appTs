import { API } from "aws-amplify";
export const createEvents = ({ description, dayOfWeek, taskHour }) => ({ setCreateEventResponse, setCreateIsLoading, setDisplayErrorModal }) => {
    setCreateIsLoading(true);
    try {
        API.post("plannerprojectapi", "/events", {
            body: {
                id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                description,
                dayOfWeek,
                taskHour,
                userId: JSON.parse(localStorage.getItem('user')).sub,
                //add date with a default value + the taskHour
                date: new Date().toISOString().split('T')[0] + 'T' + taskHour
            }
        }).then((response) => {
            console.log(response, 'post response');
            setCreateEventResponse(response);
            setCreateIsLoading(false);
        }).catch(err => {
            console.log(err, 'post err');
            setCreateIsLoading(false);
            setDisplayErrorModal(err.message);
            setCreateEventResponse(err.message);
        });
    }
    catch (err) {
        console.log(err, 'post try err');
        setCreateIsLoading(false);
        setDisplayErrorModal(err.message);
        setCreateEventResponse(err.message);
    }
};
