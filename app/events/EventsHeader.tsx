export default function EventsHeader () {
    const headers = [ 'ACTOR', 'ACTION', 'DATE' ]

    return <thead className="block px-4 pb-4 bg-neutral-100">
                <tr className="block">
                    {
                        headers.map(
                            header =>
                                <th key={header}
                                    className='inline-block w-1/3'>
                                    {header}
                                </th>)
                    }
                </tr>
            </thead>
}