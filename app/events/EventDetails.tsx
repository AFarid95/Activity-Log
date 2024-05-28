import Event from './Event';
import EventDetailPart from './EventDetailPart';
import datetimeFormat from './datetimeFormat';

export default function EventDetails({ event, onClick }: {
    event: Event, onClick: () => void
}) {
    const eventDetailParts = {
        ACTOR: {
            Name: event.actorName,
            Email: event.actorEmail,
            ID: event.actorId
        },
        ACTION: {
            Name: event.actionName,
            ID: event.actionId
        },
        DATE: {
            Readable: datetimeFormat(
                event.occurredAt)
        },
        METADATA: {
            Redirect: event.redirect,
            Description: event.description,
            'Request ID': event.xRequestId
        },
        TARGET: {
            Name: event.targetName,
            ID: event.targetId
        }
    }

    return <tr className='block
                            px-4
                            pt-4
                            bg-white
                            hover:bg-gray-50
                            -mx-4
                            border-2
                            rounded-2xl
                            border-neutral-200
                            cursor-pointer'
                onClick={onClick}>
                <td className='block' colSpan={3}>
                    <ul>
                        {
                            Object.keys(eventDetailParts).map(
                                eventDetailPartHeader =>
                                    <li key={eventDetailPartHeader}
                                        className='inline-block
                                                    w-1/3
                                                    align-top
                                                    mb-4'>
                                        <EventDetailPart
                                            caption={
                                                eventDetailPartHeader
                                            }
                                            data={
                                                eventDetailParts[
                                                    eventDetailPartHeader as
                                                    keyof
                                                    typeof eventDetailParts]
                                            } />
                                    </li>
                            )
                        }
                    </ul>
                </td>
            </tr>
}