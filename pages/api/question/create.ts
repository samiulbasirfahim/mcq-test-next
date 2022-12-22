import { NextApiRequest, NextApiResponse } from "next"
import { Question } from "../../../models/question"
import { User } from "../../../models/user"
import { connectMongoose } from "../../../utilities/mongooseConnect"

export default async function create(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = req.body
    await connectMongoose()
    const question = new Question({
        ...body,
    })
    const user = await User.findById(body.addedBy)
    user.totalSubmitedQuestion = user.totalSubmitedQuestion + 1
    user.point = user.point + 5
    question.save(function (err: any, data: any) {
        if (err) {
            res.json({ message: err.message, code: 500, status: false })
        } else {
            User.findByIdAndUpdate(body.addedBy, user, function (err: any) {
                if (!err) {
                    res.json(data)
                } else {
                    res.json({ message: err.message, code: 500, status: false })
                }
            })
        }
    })
}
