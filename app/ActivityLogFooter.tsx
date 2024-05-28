import { MouseEventHandler } from 'react'

export default function ActivityLogFooter({ isLoadButton, onClick, text }: {
    isLoadButton: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    text: string
}) {
    const commonClasses = 'block w-full \
                            py-3 \
                            bg-neutral-100 \
                            rounded-b-2xl \
                            font-semibold'

    return isLoadButton?
            <button className={commonClasses}
                    onClick={onClick}>
                {text}
            </button> :
            <div className={commonClasses + ' text-center'}>
                {text}
            </div>
}