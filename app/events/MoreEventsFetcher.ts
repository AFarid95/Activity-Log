import EventsFetcher from "./EventsFetcher";
import Event from "./Event";

export default class MoreEventsFetcher extends EventsFetcher {
    fetchedEventsCallback(events: Event[]) {
        if (events.length > 0) {
            this.stateSetters.setEvents(oldEvents => oldEvents.concat(events))
            this.stateSetters.setPagesLoaded(pagesLoaded => pagesLoaded + 1)
          }
          else
          this.stateSetters.setAllEventsLoaded(true)
    }
}