export default function EventPageLoadingState({ text }: {
    text: string
}) {
    return <tr className='block'>
                <td className='block' colSpan={3}>
                    <div className='font-semibold
                                    text-center
                                    w-full'>
                        {text}
                    </div>
                </td>
            </tr>
}