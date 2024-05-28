import Thumbnail from './Thumbnail'

export default function EmailWithThumbnail({ email }: {
    email: string
}) {
    return <>
                <Thumbnail letter={email[0].toUpperCase()} />
                {email}
            </>
}