import { ChangeEventHandler } from "react"

export default function SearchBar({ onChange }: {
    onChange: ChangeEventHandler<HTMLInputElement>
}) {
    return <div className='p-3 bg-neutral-100 rounded-t-2xl'>
                <input type='text'
                            placeholder='Search name, email or action...'
                            className='border-2
                                        rounded-xl
                                        p-3
                                        w-full
                                        bg-neutral-100'
                            onChange={onChange} />
            </div>
}