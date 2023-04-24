System.register(["react", "./../../../../../../../../../contexts/taskContext"], function (exports_1, context_1) {
    "use strict";
    var react_1, taskContext_1, _a, setTask, task, inputsHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (taskContext_1_1) {
                taskContext_1 = taskContext_1_1;
            }
        ],
        execute: function () {
            _a = react_1.useContext(taskContext_1.TasksContext), setTask = _a.setTask, task = _a.task;
            // { taskText: '', taskDay: 'Monday', taskHour: '', taskId: '1' }
            exports_1("inputsHandler", inputsHandler = (event) => {
                switch (event.target.name) {
                    case "taskText":
                        setTask({ ...task, taskText: event.target.value });
                        break;
                    case "taskDay":
                        setTask({ ...task, taskDay: event.target.value });
                        break;
                    case "taskHour":
                        const re = /(^\d{2})(\d{2})/;
                        let formated = '';
                        if (/[^0-9]/g.test(event.target.value) && event.target.value.length < 6)
                            return;
                        else if (event.target.value.length === 4 && /(^[0-2])([0-3])([0-5])([0-9])/.test(event.target.value)) {
                            formated = event.target.value.replace(re, '$1h $2m');
                            setTask({ ...task, taskHour: formated });
                        }
                        else if (event.target.value.length === 4 && /(^[0-1])([0-9])([0-5])([0-9])/.test(event.target.value)) {
                            formated = event.target.value.replace(re, '$1h $2m');
                            setTask({ ...task, taskHour: formated });
                        }
                        else if (event.target.value.length === 4
                            && (!/(^[0-2])([0-3])([0-5])([0-9])/.test(event.target.value))) {
                            formated = '0000'.replace(re, '$1h $2m');
                            setTask({ ...task, taskHour: formated });
                        }
                        else if (event.target.value.length === 4
                            && (!/(^[0-1])([0-9])([0-5])([0-9])/.test(event.target.value))) {
                            formated = '0000'.replace(re, '$1h $2m');
                            setTask({ ...task, taskHour: formated });
                        }
                        else if (event.target.value.length <= 4 && /[0-9]/g.test(event.target.value)) {
                            setTask({ ...task, taskHour: event.target.value });
                        }
                        else if (event.target.value.length === 8)
                            return;
                        else {
                            const finalForm = event.target.value.replaceAll(/[^0-9]/g, '');
                            setTask({ ...task, taskHour: finalForm.slice(0, -1) });
                        }
                        break;
                    default:
                        break;
                }
            });
        }
    };
});
//# sourceMappingURL=inputsHandler.js.map