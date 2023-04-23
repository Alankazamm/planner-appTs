import { API } from "aws-amplify";
export const getEvents = (event) => ({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal }) => {
    console.log(event, 'event');
    setFetchingLoading(true);
    try {
        //get all events by user sub , model: /filter/:userId/:dayOfWeek/:date/:description'
        API.get('plannerprojectapi', `/events/filter/${JSON.parse(localStorage.getItem('user')).sub}/${event.dayOfWeek ? event.dayOfWeek : 'null'}/${event.date ? event.date : 'null'}/${event.description ? event.description : 'null'}`, {
            headers: {
                Authorization: localStorage.getItem('sessionToken')
            }
        }).then((res) => {
            setGetEventsResponse(res);
            console.log(res, 'get res');
            setTimeout(() => {
                setFetchingLoading(false);
            }, 1000);
        }).catch((err) => {
            setFetchingLoading(false);
            console.log(err, 'get err');
            setGetEventsResponse(err);
        });
    }
    catch (err) {
        console.log(err, 'try get err');
        setGetEventsResponse(err.message);
        setDisplayErrorModal(err.message);
        setTimeout(() => {
            setFetchingLoading(false);
        }, 1111);
    }
};
//# sourceMappingURL=getEvents.js.map