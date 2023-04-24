System.register(["aws-amplify"], function (exports_1, context_1) {
    "use strict";
    var aws_amplify_1, deleteEvents;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
            }
        ],
        execute: function () {
            exports_1("deleteEvents", deleteEvents = (event) => ({ setDeleteEventsResponse, setFetchingLoading, setDisplayErrorModal, setCreateIsLoading }) => {
                if (event.id) {
                    setFetchingLoading(true);
                    try {
                        aws_amplify_1.API.del('plannerprojectapi', `/events/${JSON.parse(localStorage.getItem('user')).sub}/id/${event.id}`, {
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
                        });
                    }
                    catch (err) {
                        setFetchingLoading(false);
                        setDisplayErrorModal(err.message);
                        setDeleteEventsResponse(err.message);
                    }
                }
                else if (event.dayOfWeek) {
                    setFetchingLoading(true);
                    try {
                        aws_amplify_1.API.del('plannerprojectapi', `/events/${JSON.parse(localStorage.getItem('user')).sub}/dayOfWeek/${event.dayOfWeek}`, {
                            headers: {
                                Authorization: localStorage.getItem('token')
                            }
                        }).then((res) => {
                            setDeleteEventsResponse(res);
                            setFetchingLoading(false);
                        }).catch((err) => {
                            console.log(err);
                            setFetchingLoading(false);
                            setDisplayErrorModal(err.message + ' in week request');
                            setDeleteEventsResponse(err.message + ' in week request');
                        });
                    }
                    catch (err) {
                        console.log(err);
                        setFetchingLoading(false);
                        setDisplayErrorModal(err.message + ' in week request');
                        setDeleteEventsResponse(err.message + ' in week request');
                    }
                }
                else {
                    setCreateIsLoading(true);
                    try {
                        aws_amplify_1.API.del('plannerprojectapi', `/events`, {
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
                        });
                    }
                    catch (err) {
                        console.log(err, 'delete catch error');
                        setFetchingLoading(false);
                        setDisplayErrorModal(err.message);
                        setDeleteEventsResponse(err.message);
                    }
                }
            });
        }
    };
});
//# sourceMappingURL=deleteEvents.js.map