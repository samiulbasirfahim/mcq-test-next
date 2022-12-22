import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/user"

export default async function create(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = req.query.id
    const body: any = req.body
    const oldUser = await User.findById(id)
    oldUser.totalAnsweredQuestion =
        oldUser.totalAnsweredQuestion + body.totalQuestion
    oldUser.totalCorrectedQuestion =
        oldUser.totalCorrectedQuestion + body.totalCorrected
    oldUser.point = oldUser.point + body.point
    const quezInfo = {
        category: body.category,
        percantage: body.totalCorrected / body.totalQuestion * 100
    }
    oldUser.history = [quezInfo, ...oldUser?.history]
    console.log(oldUser)
    User.findByIdAndUpdate(id, oldUser, function (err: any, data: any) {
        if (err) {
            res.json({ message: "something went wrong", status: false })
        } else {
            res.json({ status: true, data })
        }
    })
}
