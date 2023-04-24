System.register(["aws-amplify"], function (exports_1, context_1) {
    "use strict";
    var aws_amplify_1, getEvents;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
            }
        ],
        execute: function () {
            exports_1("getEvents", getEvents = (event) => ({ setGetEventsResponse, setFetchingLoading, setDisplayErrorModal }) => {
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
            });
        }
    };
});
//# sourceMappingURL=getEvents.js.map