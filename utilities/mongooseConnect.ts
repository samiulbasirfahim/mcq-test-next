import mongoose from "mongoose";

export default async function mongooseConnect() {
    const mongo_uri = process.env.MONGO_URI as string
    return mongoose.connect(mongo_uri)
}