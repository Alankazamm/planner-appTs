"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvents = void 0;
const aws_amplify_1 = require("aws-amplify");
const getEvents = (event) => ({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal }) => {
    console.log(event, 'event');
    setFetchingLoading(true);
    try {
        //get all events by user sub , model: /filter/:userId/:dayOfWeek/:date/:description'
        aws_amplify_1.API.get('plannerprojectapi', `/events/filter/${JSON.parse(localStorage.getItem('user')).sub}/${event.dayOfWeek ? event.dayOfWeek : 'null'}/${event.date ? event.date : 'null'}/${event.description ? event.description : 'null'}`, {
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
exports.getEvents = getEvents;
//# sourceMappingURL=getEvents.js.map