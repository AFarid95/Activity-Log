import Event from "./Event";
import EventDetailPart from "./EventDetailPart";
import datetimeFormat from "./datetimeFormat";

export default function EventDetails({ event, onClick }: {
    event: Event, onClick: () => void
}) {
    return <tr className="block
                            px-4
                            pt-4
                            hover:bg-gray-50
                            -mx-4
                            border-x-2
                            rounded-2xl
                            border-neutral-100
                            cursor-pointer"
                onClick={onClick}>
                <td className="block" colSpan={3}>
                    <ul>
                        <li className="inline-block w-1/3 align-top mb-4">
                            <EventDetailPart
                                caption='ACTOR'
                                data={{
                                    Name: event.actorName,
                                    Email: event.actorEmail,
                                    ID: event.actorId
                                }} />
                        </li>
                        <li className="inline-block w-1/3 align-top mb-4">
                            <EventDetailPart
                                caption='ACTION'
                                data={{
                                    Name: event.actionName,
                                    ID: event.actionId
                                }} />
                        </li>
                        <li className="inline-block w-1/3 align-top mb-4">
                            <EventDetailPart
                                caption='DATE'
                                data={{
                                    'Readable': datetimeFormat(
                                        event.occurredAt)
                                }} />
                        </li>
                        <li className="inline-block w-1/3 align-top mb-4">
                            <EventDetailPart
                                caption='METADATA'
                                data={{
                                    Redirect: event.redirect,
                                    Description: event.description,
                                    'Request ID': event.xRequestId
                                }} />
                        </li>
                        <li className="inline-block w-1/3 align-top mb-4">
                            <EventDetailPart
                                caption='TARGET'
                                data={{
                                    Name: event.targetName,
                                    ID: event.targetId
                                }} />
                        </li>
                    </ul>
                </td>
            </tr>
}