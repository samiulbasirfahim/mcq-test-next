import { NextApiRequest, NextApiResponse } from "next"
import { Category } from "../../../models/category"
import { connectMongoose } from "../../../styles/utilities/mongooseConnect"

export default async function get(req: NextApiRequest, res: NextApiResponse) {
    await connectMongoose()
    const category = await Category.find()
    res.json(category)
}