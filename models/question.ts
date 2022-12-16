import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    options: { type: Array, required: true },
    category: { type: String, required: true },
    correctAnswerIndex: { type: Number, required: true },
    addedBy: { type: mongoose.SchemaTypes.ObjectId },
    condition: {
        type: String,
        enum: ["pending", "approved"]
    }
})

export const Question = mongoose.models.Question || mongoose.model("Question", questionSchema)