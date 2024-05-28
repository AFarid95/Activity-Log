import Event from "./Event";
import EventRow from "./EventRow";

export default function EventsBody({ events }: { events: Event[] }) {
    return <tbody className="block py-2">
                { 
                    events.map(
                        event => 
                            <EventRow key={event.id} event={event} />)
                }
            </tbody>
}