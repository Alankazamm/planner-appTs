//hooks
import { useContext } from 'react'
import { createContextType, TasksContext } from '../../../../../contexts/tasksContext';



export type eventTarget = React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLTextAreaElement>;

const { setTask, task }:createContextType  = useContext(TasksContext);
    // { taskText: '', taskDay: 'Monday', taskHour: '', taskId: '1' }
    export const inputsHandler = (event:eventTarget) => {
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
                if (/[^0-9]/g.test(event.target.value) && event.target.value.length < 6) return;
                else if (event.target.value.length === 4 && /(^[0-2])([0-3])([0-5])([0-9])/.test(event.target.value))
                {
                    formated = event.target.value.replace(re, '$1h $2m');
                    setTask({ ...task, taskHour: formated })
                }
                else if (event.target.value.length === 4 && /(^[0-1])([0-9])([0-5])([0-9])/.test(event.target.value))
                {
                    formated = event.target.value.replace(re, '$1h $2m');
                    setTask({ ...task, taskHour: formated })
                }
                else if (event.target.value.length === 4
                    && (!/(^[0-2])([0-3])([0-5])([0-9])/.test(event.target.value)))
                {
                    formated = '0000'.replace(re, '$1h $2m');
                    setTask({ ...task, taskHour: formated });
                }
                else if (event.target.value.length === 4
                    && (!/(^[0-1])([0-9])([0-5])([0-9])/.test(event.target.value)))
                {
                    formated = '0000'.replace(re, '$1h $2m');
                    setTask({ ...task, taskHour: formated });
                }
                else if (event.target.value.length <= 4 && /[0-9]/g.test(event.target.value))
                {
                    setTask({ ...task, taskHour: event.target.value });
                }
                else if (event.target.value.length === 8) return;
                else
                {
                    const finalForm = event.target.value.replaceAll(/[^0-9]/g, '');
                    setTask({ ...task, taskHour: finalForm.slice(0, -1) });
                }
                break;
            default:
                break;
        }
    }