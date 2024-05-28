import { useState } from 'react';
import Event from './Event';
import EventSummary from './EventSummary';
import EventDetails from './EventDetails';

export default function EventRow({ event }: { event: Event }) {
    const [detailsShown, setDetailsShown] = useState<boolean>(false)

    function showDetails() {
        setDetailsShown(true)
    }

    function hideDetails() {
        setDetailsShown(false)
    }

    return detailsShown?
            <EventDetails event={event} onClick={hideDetails} /> :
            <EventSummary event={event} onClick={showDetails} />
}