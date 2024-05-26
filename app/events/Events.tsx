import { ReactNode } from "react";
import Event from "./Event";

export default function Events({ events }: { events: Event[] }): ReactNode {
    return <table>
                <thead>
                    <tr>
                        <th>Actor</th>
                        <th>Action</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        events.map(event => 
                            <tr key={event.id}>
                                <td>{event.actorEmail}</td>
                                <td>{event.actionName}</td>
                                <td>{event.occurredAt.toLocaleString()}</td>
                            </tr>
                        ) 
                    }
                </tbody>
            </table>
}