import { NextApiRequest, NextApiResponse } from "next";
import mongooseConnect from "../../../utilities/mongooseConnect";
import Question from "../../../models/question";


export default async function addQuestion(req: NextApiRequest, res: NextApiResponse<any>) {
    const body = req.body
    await mongooseConnect()
    console.log("Connected to mongodb")
    const question = new Question({ ...body })
    question.save(function (err: any) {
        if (err) {
            console.log(err)
        } else {
            res.json({ status: true })
        }
    })
}