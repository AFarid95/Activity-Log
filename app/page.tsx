'use client'

import Events from './events/Events'
import { ChangeEvent, useState } from 'react'
import SearchBar from './SearchBar'

export default function ActivityLog() {
  const [searchedText, setSearchedText] = useState<string>('')
  const [pagesLoaded, setPagesLoaded] = useState<number>(1)
  const [areAllEventsLoaded, setAreAllEventsLoaded] = useState<boolean>(false)

  function notifyThatAllEventsAreLoaded() {
    setAreAllEventsLoaded(true)
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchedText(e.target.value)
    setAreAllEventsLoaded(false)
    setPagesLoaded(1)
  }

  function handleClick() {
    setPagesLoaded(pagesLoaded + 1)
  }
  
  return <div className='m-12 border-2 rounded-2xl border-neutral-100'>
            <SearchBar onChange={handleSearch} />
            <Events
              searchedText={searchedText}
              pagesLoaded={pagesLoaded}
              allEventsAreLoadedCallback={notifyThatAllEventsAreLoaded} />
            {
              areAllEventsLoaded?
                <></> :
                <button className='block w-full
                                    py-3
                                    bg-neutral-100
                                    rounded-b-2xl
                                    font-semibold'
                        onClick={handleClick}>
                  LOAD MORE
                </button>
            }
          </div>
}
