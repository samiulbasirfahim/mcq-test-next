import { NextApiRequest, NextApiResponse } from "next"
import { Category } from "../../../models/category"
import { connectMongoose } from "../../../utilities/mongooseConnect"

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const body = req.body
    const category = await Category.create(body)
    res.json(category)
}