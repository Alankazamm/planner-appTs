
import { useEffect, useState } from 'react';
import { getEvents } from '../actions/events/getEvents';
import { arrayOfTasks } from '../contexts/TasksContext';

//types
export type events = {
    createdAt: string,
    dayOfWeek: string,
    description: string,
    updatedAt: string,
    _id: string
    userId: string
}
export enum eventStatus {
    "Access denied" = 401,
    "Event not found" = 404,
    "Internal server error" = 501,
    "Event created" = 201,
    "OK" = 200,
}

export type getEvents = {
    status?: eventStatus,
    data?: {
        events: events[]
    }
}
export const useGetAllEvents = () => {

    const [events, setEvents] = useState<arrayOfTasks>([]);
    const [getEventsResponse, setGetEventsResponse] = useState<getEvents>({});

    useEffect(() => {
        console.log('useEffect');
        getEvents({})(setGetEventsResponse);

    }, []);
    useEffect(() => {
        if (getEventsResponse.hasOwnProperty('status')) {
          console.log(getEventsResponse)
          if (getEventsResponse.status === eventStatus["OK"]) {
            console.log(getEventsResponse.data!.events)
            setEvents(getEventsResponse!.data!.events!.map((event) => {
              return {
                taskText: event.description,
                taskDay: event.dayOfWeek,
                taskHour: event.createdAt.substring(11, 16).replace(':', 'h').concat('m'),
                taskId: event._id
              }
            }));
          }
        }
      }, [getEventsResponse]);

     return events;
}