import { NextApiRequest, NextApiResponse } from "next"
import { Question } from "../../../models/question"
import { connectMongoose } from "../../../styles/utilities/mongooseConnect"
import randomNumber from "../../../styles/utilities/randomNumber"

export default async function get(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const category = req?.query?.category
    const condition = req?.query?.condition
    Question.count({ category: category, condition: condition }, async function (err, count: number) {
        if (!err) {
            if (count > 0) {
                let questionIndex = []
                let questions = []
                for (let i = 0; i < 30; i++) {
                    const number = randomNumber(count)
                    if (questionIndex.indexOf(number) === -1) {
                        questionIndex.push(number)
                        const question = await Question.find({ category: category, condition: condition }).skip(number as number).limit(1).populate("addedBy")
                        questions.push(question[0])
                    } else {
                        continue
                    }
                }
                res.json(questions)
            } else {
                res.json({ status: false, message: "No question found" })
            }
        }

    })
}
