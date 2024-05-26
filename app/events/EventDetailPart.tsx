import Event from "./Event";

export default function EventDetailPart({ caption, data } : {
    caption: string,
    data: any
}) {
    return <table>
                <caption>{caption}</caption>
                <tbody>
                    {
                        Object.keys(data).map((keyName) =>
                            <tr key={keyName}>
                                <td>{keyName}:</td>
                                <td>{data[keyName]}</td>
                            </tr>)
                    }
                </tbody>
            </table>
}