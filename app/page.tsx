'use client'

import ActivityLogStateSetters from './ActivityLogStateSetters'
import Event from './events/Event'
import Events from './events/Events'
import { ChangeEvent, useEffect, useState } from 'react'
import InitialEventsFetcher from './events/InitialEventsFetcher'
import MoreEventsFetcher from './events/MoreEventsFetcher'

export default function ActivityLog() {
  const [events, setEvents] = useState<Event[]>([])
  const [searchedString, setSearchedString] = useState<string>('')
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()
  const [pagesLoaded, setPagesLoaded] = useState<number>(0)
  const [allEventsLoaded, setAllEventsLoaded] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const stateSetters = new ActivityLogStateSetters
  stateSetters.setAllEventsLoaded = setAllEventsLoaded
  stateSetters.setError = setError
  stateSetters.setEvents = setEvents
  stateSetters.setLoading = setLoading
  stateSetters.setPagesLoaded = setPagesLoaded

  function fetchInitialEvents(searchedString = '') {
    setAllEventsLoaded(false)
    setLoading(true)
    const eventsFetcher = new InitialEventsFetcher(stateSetters)
    eventsFetcher.fetchEvents(searchedString)
  }

  useEffect(() => { fetchInitialEvents() }, [])

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchedString(e.target.value)
    clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => {
      fetchInitialEvents(e.target.value)
    }, 500))
  }

  function handleClick() {
    setLoading(true)
    const eventsFetcher = new MoreEventsFetcher(stateSetters)
    eventsFetcher.fetchEvents(searchedString, pagesLoaded)
  }
  
  return <div className='m-12 border-x-2 rounded-2xl border-neutral-100'>
            <div className='bg-neutral-100 rounded-t-2xl'>
              <div className='p-3'>
                <input type='text'
                        placeholder='Search name, email or action...'
                        className='border-2
                                    rounded-xl
                                    p-3
                                    w-full
                                    bg-neutral-100'
                        onChange={handleSearch} />
              </div>
            </div>
            <div>
              <Events events={events} />
              {
                loading? <h1>Loading...</h1> :
                error? <h1>Internal server error</h1> : <></>
              }
              {
                loading || allEventsLoaded?
                <></> :
                <button className='block
                                    w-full
                                    py-3
                                    bg-neutral-100
                                    rounded-b-2xl
                                    font-semibold'
                        onClick={handleClick}>
                  LOAD MORE
                </button>
              }
            </div>
          </div>
}
