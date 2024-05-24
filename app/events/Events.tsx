import { ReactNode } from "react";
import Event from "./Event";

export default function Events({ events }: { events: Event[] }): ReactNode {
    return <ol>
            { 
                events.map(event => 
                    <li key={event.id}>
                        {event.actorEmail}, {event.actionName}, {event.occurredAt.toLocaleString()}
                    </li>
                ) 
            }
            </ol>
}