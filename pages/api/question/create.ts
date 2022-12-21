import { NextApiRequest, NextApiResponse } from "next"
import { Question } from "../../../models/question"
import { connectMongoose } from "../../../utilities/mongooseConnect"

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body
    await connectMongoose()
    const question = new Question({
        ...body
    })
    question.save(function (err: any, data: any) {
        if (err) {
            res.json({ message: err.message, code: 500, status: false })
        } else {
            res.json(data)
        }
    })
}
