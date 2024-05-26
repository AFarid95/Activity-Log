import { ReactNode } from "react";
import Event from "./Event";
import EventRow from "./EventRow";

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
                        events.map(
                            event => 
                                <EventRow  key={event.id} event={event} />)
                    }
                </tbody>
            </table>
}