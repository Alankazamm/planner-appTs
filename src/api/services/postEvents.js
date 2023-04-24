System.register(["aws-amplify"], function (exports_1, context_1) {
    "use strict";
    var aws_amplify_1, createEvents;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aws_amplify_1_1) {
                aws_amplify_1 = aws_amplify_1_1;
            }
        ],
        execute: function () {
            exports_1("createEvents", createEvents = ({ description, dayOfWeek, taskHour }) => ({ setCreateEventResponse, setCreateIsLoading, setDisplayErrorModal }) => {
                setCreateIsLoading(true);
                try {
                    aws_amplify_1.API.post("plannerprojectapi", "/events", {
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
            });
        }
    };
});
//# sourceMappingURL=postEvents.js.map