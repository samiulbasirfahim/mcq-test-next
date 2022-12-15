export default function randomNumber(limit: number) {
    let number = Math.floor(Math.random() * limit)
    if (number < limit) {
        return number
    } else {
        randomNumber(limit)
    }

}