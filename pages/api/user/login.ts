import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models/user";
import bcrypt from "bcrypt"
import { connectMongoose } from "../../../utilities/mongooseConnect";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({ email })
    const passIsHashed = req.body.isHashed
    if (!user) {
        return res.json({ message: "User not found", code: 404 })
    }
    if (passIsHashed) {
        if (user.password === password) {
            res.json({ ...user, status: true })
        } else {
            res.json({ message: "Password incorrect", code: 404 })
        }
    } else {
        bcrypt.compare(password, user.password, function (err, result) {
            console.log(password, user.password)
            if (err) {
                return res.json({ message: "something went wrong", code: 500 })
            } else {
                if (result) {
                    res.json({ user, status: true })
                } else {
                    res.json({ message: "Password incorrect", code: 404 })
                }
            }

        });
    }
    return res.json({ message: "something went wrong", code: 500 })
}