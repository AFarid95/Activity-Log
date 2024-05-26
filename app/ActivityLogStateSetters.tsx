import { Dispatch, SetStateAction } from "react";
import Event from './events/Event'

export default class ActivityLogStateSetters {
    setEvents!: Dispatch<SetStateAction<Event[]>>;
    setPagesLoaded!: Dispatch<SetStateAction<number>>;
    setAllEventsLoaded!: Dispatch<SetStateAction<boolean>>;
    setLoading!: Dispatch<SetStateAction<boolean>>;
    setError!: Dispatch<SetStateAction<boolean>>;
}