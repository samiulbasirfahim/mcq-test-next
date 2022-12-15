import { NextApiRequest, NextApiResponse } from "next"
import { Question } from "../../../models/question"
import { connectMongoose } from "../../../utilities/mongooseConnect"

export default async function create(req: NextApiRequest, res: NextApiResponse) {

    const body = req.body
    await connectMongoose()
    const question = await Question.create(body)
    res.json(question)
}
