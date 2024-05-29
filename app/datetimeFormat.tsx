const formatter = Intl.DateTimeFormat(
    'en-US',
    {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: '2-digit'
    }
)

export default function datetimeFormat(date: Date): string {
    return formatter.format(new Date(date))
}