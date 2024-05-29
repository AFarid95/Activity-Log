import useSWR from "swr"
import Event from "./Event"
import EventRow from "./EventRow"
import { useEffect } from "react"
import pageSize from "./pageSize"
import EventPageLoadingState from "./EventPageLoadingState"

export default function EventPage ({
    searchedText,
    index,
    allEventsAreLoadedCallback }: {
    searchedText: string,
    index: number,
    allEventsAreLoadedCallback: () => void
  }) {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
  
    const { data, error, isLoading } = useSWR('http://localhost:3000/events?'
                                              + `search=${searchedText}`
                                              + `&page=${index}`,
                                              fetcher)
    useEffect(() => {
        if (data && (data as Event[]).length < pageSize)
            allEventsAreLoadedCallback()
        }, [data, allEventsAreLoadedCallback])
   
    if (error)
      return <EventPageLoadingState
                text='SERVER ERROR, WILL TRY LOADING AGAIN' />
    
    if (isLoading)
      return <EventPageLoadingState
                text='LOADING...' />
   
    return <>
                {
                    data.map((event: Event, index: number) =>
                        <EventRow key={index} event={event}/>)
                }
            </>
  }