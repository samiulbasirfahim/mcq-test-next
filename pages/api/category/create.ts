import { NextApiRequest, NextApiResponse } from "next"
import { Category } from "../../../models/category"
import { connectMongoose } from "../../../styles/utilities/mongooseConnect"

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const body = req.body
    await Category.create(body, function (err: any, data: any) {
        if (err) {
            res.json({ message: "Error creating category", status: false })
        } else if (data) {
            res.json(data)
        }
    })

}