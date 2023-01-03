import mongoose from "mongoose";

export const connectMongoose = () => mongoose.connect(process.env.MONGO_URI as string).then(() => console.log("connected succesfully")).catch((error: any) => console.log(error.message))