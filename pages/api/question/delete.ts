import { NextApiRequest, NextApiResponse } from "next";
import { Question } from "../../../models/question";
import { connectMongoose } from "../../../styles/utilities/mongooseConnect";

export default async function deleteFunc(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const id = req.query.id
    Question.findByIdAndDelete(id, function (err: any, data: any) {
        if (err) {
            res.json({ status: false })
        } else {
            res.json({ status: true })
        }
    })
}