export default function EventDetailPartCaption({ caption } : {
    caption: string
}) {
    return <caption className="text-left text-neutral-500 pb-2">
                {caption}
            </caption>
}