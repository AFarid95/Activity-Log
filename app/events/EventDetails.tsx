import Event from "./Event";
import EventDetailPart from "./EventDetailPart";

export default function EventDetails({ event, onClick }: {
    event: Event, onClick: () => void
}) {
    return <tr onClick={onClick}>
                <td colSpan={3}>
                    <ul>
                        <li>
                            <EventDetailPart
                                caption='ACTOR'
                                data={{
                                    Name: event.actorName,
                                    Email: event.actorEmail,
                                    ID: event.actorId
                                }} />
                        </li>
                        <li>
                            <EventDetailPart
                                caption='ACTION'
                                data={{
                                    Name: event.actionName,
                                    ID: event.actionId
                                }} />
                        </li>
                        <li>
                            <EventDetailPart
                                caption='DATE'
                                data={{
                                    'Occurred at': event.occurredAt
                                }} />
                        </li>
                        <li>
                            <EventDetailPart
                                caption='METADATA'
                                data={{
                                    Redirect: event.redirect,
                                    Description: event.description,
                                    'Request ID': event.xRequestId
                                }} />
                        </li>
                        <li>
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