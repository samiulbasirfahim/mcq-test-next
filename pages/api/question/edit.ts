import { NextApiRequest, NextApiResponse } from "next";
import { Question } from "../../../models/question";
import { connectMongoose } from "../../../styles/utilities/mongooseConnect";

export default async function edit(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const question = req.body
    const filter = { _id: question._id }
    Question.findOneAndUpdate(filter, question, function (err: any, data: any) {
        if (err) { res.json({ status: false }) } else {
            res.json({ status: true, question: data })
        }
    })
}