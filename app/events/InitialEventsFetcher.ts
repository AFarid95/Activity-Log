import EventsFetcher from './EventsFetcher';
import Event from './Event';

export default class InitialEventsFetcher extends EventsFetcher {
    fetchedEventsCallback(events: Event[]) {
        this.stateSetters.setEvents(events)
        this.stateSetters.setPagesLoaded(1)
        if (events.length == 0)
            this.stateSetters.setAllEventsLoaded(true)
    }
}