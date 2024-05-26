import Event from "./Event";

export default function EventDetailPart({ caption, data } : {
    caption: string,
    data: any
}) {
    return <table>
                <caption className="text-left text-neutral-500 pb-2">
                    {caption}
                </caption>
                <tbody className="text-sm">
                    {
                        Object.keys(data).map((keyName) =>
                            <tr className="pb-1" key={keyName}>
                                <td className="w-1/3 pr-4 text-neutral-500">
                                    {keyName}
                                </td>
                                <td className="w-2/3">
                                    {data[keyName]}
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
}