import thumbnailClassOfLetter from './events/thumbnailClassOfLetter'

export default function Thumbnail({ letter }: {
    letter: string
}) {
    return <span className={
                thumbnailClassOfLetter(letter)
                }>
                {letter}
            </span>
}