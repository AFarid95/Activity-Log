import Event from "./Event";

export default function EventSummary({ event, onClick }: {
    event: Event, onClick: () => void
}) {
    return <tr onClick={onClick}>
                <td>{event.actorEmail}</td>
                <td>{event.actionName}</td>
                <td>{event.occurredAt.toLocaleString()}</td>
            </tr>
}