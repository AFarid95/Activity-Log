'use client'

import Event from './events/Event'
import Events from './events/Events'
import { ChangeEvent, useEffect, useState } from 'react'

export default function Home() {
  const [events, setEvents] = useState<Event[]>([])
  const [searchedString, setSearchedString] = useState<string>('')
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()
  const [pagesLoaded, setPagesLoaded] = useState<number>(0)
  const [allEventsLoaded, setAllEventsLoaded] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    fetch('http://localhost:3000/events')
    .then(response => response.json())
    .then(events => {
      setEvents(events)
      setPagesLoaded(1)
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchedString(e.target.value)
    clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => {
      setAllEventsLoaded(false)
      setLoading(true)
      fetch('http://localhost:3000/events?'
              + `search=${e.target.value}`)
      .then(response => response.json())
      .then((events: Event[]) => {
        setPagesLoaded(1)
        setEvents(events)
        if (events.length == 0)
          setAllEventsLoaded(true)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      }) }, 500))
    }

  function handleClick() {
    setLoading(true)
    fetch('http://localhost:3000/events?'
            + `search=${searchedString}`
            + `&page=${pagesLoaded}`)
    .then(response => response.json())
    .then((fetchedEvents: Event[]) => {
      if (fetchedEvents.length > 0) {
        setEvents(events => events.concat(fetchedEvents))
        setPagesLoaded(pagesLoaded => pagesLoaded + 1)
      }
      else
        setAllEventsLoaded(true)
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }
  
  return <>
            <input type='text' onChange={handleSearch}></input>
            <Events events={events} />
            {
              loading? <h1>Loading...</h1> :
              error? <h1>Internal server error</h1> : <></>
            }
            {
              allEventsLoaded?
              <></> :
              <button onClick={handleClick}>Load more events</button>
            }
          </>
}
