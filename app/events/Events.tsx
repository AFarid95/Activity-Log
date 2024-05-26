import { ReactNode } from "react";
import Event from "./Event";
import EventRow from "./EventRow";

export default function Events({ events }: { events: Event[] }): ReactNode {
    return <table className='block w-full text-left'>
                <thead className="block px-4 pb-4 bg-neutral-100">
                    <tr className="block">
                        <th className='inline-block w-1/3'>ACTOR</th>
                        <th className='inline-block w-1/3'>ACTION</th>
                        <th className='inline-block w-1/3'>DATE</th>
                    </tr>
                </thead>
                <tbody className="block py-2">
                    { 
                        events.map(
                            event => 
                                <EventRow key={event.id} event={event} />)
                    }
                </tbody>
            </table>
}