import ActivityLogStateSetters from '../ActivityLogStateSetters'
import Event from './Event';

export default abstract class EventsFetcher {
    stateSetters: ActivityLogStateSetters;
    abstract fetchedEventsCallback(events: Event[]): void;

    constructor(stateSetters: ActivityLogStateSetters) {
        this.stateSetters = stateSetters
    }

    fetchEvents(searchedText = '', page = 0): void {
        fetch('http://localhost:3000/events?'
                + `search=${searchedText}`
                + `&page=${page}`)
        .then(response => response.json())
        .then((events: Event[]) => { this.fetchedEventsCallback(events) })
        .catch(() => { this.stateSetters.setError(true) })
        .finally(() => { this.stateSetters.setLoading(false) })
    }
}