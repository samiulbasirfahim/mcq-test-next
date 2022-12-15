import { NextApiRequest, NextApiResponse } from "next"
import { Question } from "../../../models/question"
import { connectMongoose } from "../../../utilities/mongooseConnect"
import randomNumber from "../../../utilities/randomNumber"

export default async function get(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const category = req?.query?.category
    Question.count({ category: category }, async function (err, count: number) {
        if (!err) {
            if (count > 0) {
                let questions = []
                for (let i = 0; i < 30; i++) {
                    const question = await Question.find({ category: category }).skip(randomNumber(count) as number).limit(1)
                    questions.push(question[0])
                }
                res.json(questions)
            } else {
                res.json({ status: false, message: "No data found" })
            }
        }

    })
}
