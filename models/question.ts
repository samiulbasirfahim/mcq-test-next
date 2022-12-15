import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    options: Array,
    category: { type: String, required: true },
    correctAnswerIndex: { type: Number, required: true },
    addedBy: { type: mongoose.SchemaTypes.ObjectId, required: true }
})

export const Question = mongoose.models.Question || mongoose.model("Question", questionSchema)