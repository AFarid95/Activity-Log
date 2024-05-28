import EventDetailPartBody from "./EventDetailPartBody";
import EventDetailPartCaption from "./EventDetailPartCaption";

export default function EventDetailPart({ caption, data } : {
    caption: string,
    data: any
}) {
    return <table className="w-full">
                <EventDetailPartCaption caption={caption} />
                <EventDetailPartBody data={data} />
            </table>
}