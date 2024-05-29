import Event from './Event';
import EventsHeader from './EventsHeader';
import EventsBody from './EventsBody';
import EventPage from './EventPage';

export default function Events({
    searchedText,
    pagesLoaded,
    allEventsAreLoadedCallback }: {
    searchedText: string,
    pagesLoaded: number,
    allEventsAreLoadedCallback: () => void
}) {
    return <table className='block w-full text-left'>
                <EventsHeader />
                <EventsBody
                    searchedText={searchedText}
                    pagesLoaded={pagesLoaded}
                    allEventsAreLoadedCallback={allEventsAreLoadedCallback} />
            </table>
}