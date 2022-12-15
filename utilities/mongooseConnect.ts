import mongoose from "mongoose";

export const connectMongoose = () => mongoose.connect(process.env.MONGO_URI as string)