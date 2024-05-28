import LastFieldArrow from './LastFieldArrow'

export default function LastField({ data }: {
    data: string
}) {
    return <>
                <div className='inline-block w-3/4'>
                    {data}
                </div>
                <div className='inline-block
                                w-1/4
                                h-full
                                text-right
                                align-middle'>
                    <LastFieldArrow />
                </div>
            </>
}