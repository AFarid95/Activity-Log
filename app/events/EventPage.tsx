import useSWR from "swr"
import Event from "./Event"
import EventRow from "./EventRow"
import { useEffect } from "react"
import pageSize from "./pageSize"

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
        }, [data])
   
    if (error)
      return <tr>
                    <td  colSpan={3}>
                        <div className='font-semibold text-center'>
                            SERVER ERROR, WILL TRY LOADING AGAIN
                        </div>
                    </td>
                </tr>
    
    if (isLoading)
      return <tr>
                    <td  colSpan={3}>
                        <div className='font-semibold'>
                            LOADING...
                        </div>
                    </td>
                </tr>
   
    return <>
                {
                    data.map((event: Event, index: number) =>
                        <EventRow key={index} event={event}/>)
                }
            </>
  }