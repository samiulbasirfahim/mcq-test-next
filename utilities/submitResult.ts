import apiRoutes from "./apiRoutes"

export default function submitResult(
    totalQuestion: number,
    totalCorrect: number,
    category: string | undefined,
    userId: string | any,
    percantage: number
) {
    let point;
    if (percantage < 50) {
        point = -10
    } else {
        point = totalCorrect * 2
    }
    fetch(`${apiRoutes.submitResult}?id=${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            totalQuestion,
            totalCorrected: totalCorrect,
            category,
            point
        }),
    })
        .then((respone) => respone.json())
        .then((data) => { })
}
