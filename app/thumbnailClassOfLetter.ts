// TODO: This source file should be generated at build time before Tailwind
// builds the CSS

// I was not able to do it dynamically because Tailwind requires full class
// names without string concatenation or interpolation
// For more information, see:
// https://tailwindcss.com/docs/content-configuration#dynamic-class-names
const backgroundClasses = {
    A: 'bg-red-500',
    B: 'bg-gradient-to-br from-red-500 to-green-500',
    C: 'bg-gradient-to-br from-red-500 to-blue-500',
    D: 'bg-gradient-to-br from-red-500 to-yellow-500',
    E: 'bg-gradient-to-br from-red-500 to-orange-500',
    F: 'bg-gradient-to-br from-red-500 to-purple-500',
    G: 'bg-green-500',
    H: 'bg-gradient-to-br from-green-500 to-red-500',
    I: 'bg-gradient-to-br from-green-500 to-blue-500',
    J: 'bg-gradient-to-br from-green-500 to-yellow-500',
    K: 'bg-gradient-to-br from-green-500 to-orange-500',
    L: 'bg-gradient-to-br from-green-500 to-purple-500',
    M: 'bg-blue-500',
    N: 'bg-gradient-to-br from-blue-500 to-red-500',
    O: 'bg-gradient-to-br from-blue-500 to-green-500',
    P: 'bg-gradient-to-br from-blue-500 to-yellow-500',
    Q: 'bg-gradient-to-br from-blue-500 to-orange-500',
    R: 'bg-gradient-to-br from-blue-500 to-purple-500',
    S: 'bg-yellow-500',
    V: 'bg-gradient-to-br from-yellow-500 to-red-500',
    T: 'bg-gradient-to-br from-yellow-500 to-green-500',
    U: 'bg-gradient-to-br from-yellow-500 to-blue-500',
    W: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    X: 'bg-gradient-to-br from-yellow-500 to-purple-500',
    Y: 'bg-orange-500',
    Z: 'bg-gradient-to-br from-orange-500 to-green-500'
}

export default function thumbnailClassOfLetter(char: string): string {
    return `inline-block
            px-2
            mr-3
            aspect-square
            rounded-full
            ${backgroundClasses[char as keyof typeof backgroundClasses]}
            text-white
            text-xs/6
            font-semibold`
}