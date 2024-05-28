import EmailWithThumbnail from "../EmailWithThumbnail";
import LastField from "../LastField";
import Event from "./Event";
import datetimeFormat from "./datetimeFormat";

export default function EventSummary({ event, onClick }: {
    event: Event, onClick: () => void
}) {
    return <tr className="block
                    px-4
                    py-2
                    hover:bg-gray-50
                    cursor-pointer"
                onClick={onClick}>
                {
                    [
                        <EmailWithThumbnail email={event.actorEmail} />,
                        event.actionName,
                        <LastField data={datetimeFormat(event.occurredAt)} />
                    ].map(
                        (tdContent, index) =>
                            <td key={index} className='inline-block w-1/3'>
                                {tdContent}
                            </td>
                    )
                }
            </tr>
}