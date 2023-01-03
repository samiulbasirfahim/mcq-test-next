import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models/user";
import { connectMongoose } from "../../../styles/utilities/mongooseConnect";

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const userId = req.query.id
    User.findById(userId, function (err: any, data: any) {
        if (err) {
            res.json({ message: "User not found.", status: false })
        } else {
            res.json(data)
        }
    })
}