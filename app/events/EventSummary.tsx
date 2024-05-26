import Event from "./Event";

export default function EventSummary({ event, onClick }: {
    event: Event, onClick: () => void
}) {
    return <tr className="block
                            px-4
                            py-2
                            hover:bg-gray-50
                            cursor-pointer"
                onClick={onClick}>
                <td className='inline-block w-1/3'>{event.actorEmail}</td>
                <td className='inline-block w-1/3'>{event.actionName}</td>
                <td className='inline-block w-1/3'>
                    <div className="inline-block w-3/4">
                        {event.occurredAt.toLocaleString()}
                    </div>
                    <div className="inline-block
                                    w-1/4
                                    h-full
                                    text-right
                                    align-middle">
                        <div className="inline-block
                                        aspect-square
                                        w-1/12
                                        border-t-2
                                        border-r-2
                                        rotate-45">
                        </div>
                    </div>
                </td>
            </tr>
}