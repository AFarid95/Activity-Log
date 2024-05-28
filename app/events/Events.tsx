import Event from './Event';
import EventsHeader from './EventsHeader';
import EventsBody from './EventsBody';

export default function Events({ events }: { events: Event[] }) {
    return <table className='block w-full text-left'>
                <EventsHeader />
                <EventsBody events={events} />
            </table>
}