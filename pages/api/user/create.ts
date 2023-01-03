import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models/user";
import { connectMongoose } from "../../../styles/utilities/mongooseConnect";
import bcrypt from "bcrypt"

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const user = req.body
    bcrypt.hash(req.body.password, 7, function (err, hash) {
        if (err) {
            return res.json({ message: "Something went wrong", code: 500 })
        } else {
            user.password = hash;
            User.create(user, (err: any, user: any) => {
                if (err) {
                    res.json({ message: err.message, code: err.code })
                } else {
                    res.json(user)
                }
            })
        }
    })

}