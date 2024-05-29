import EventPage from './EventPage';

export default function EventsBody({
    searchedText,
    pagesLoaded,
    allEventsAreLoadedCallback }: {
    searchedText: string,
    pagesLoaded: number,
    allEventsAreLoadedCallback: () => void
}) {
    const eventPages = []
    for (let i = 0; i < pagesLoaded; i++) {
        eventPages.push(
            <EventPage
                key={i}
                index={i}
                searchedText={searchedText}
                allEventsAreLoadedCallback={allEventsAreLoadedCallback} />)
    }
    
    return <tbody className='block py-2'>
                {eventPages}
            </tbody>
}