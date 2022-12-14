import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    totalSubmitedQuestion: {
        type: Number,
        default: 0,
    },
    totalAnsweredQuestion: {
        type: Number,
        default: 0,
    },
    totalCorrectedQuestion: {
        type: Number,
        default: 0
    },
    point: {
        type: Number,
        default: 50
    },
    history: {
        type: Array,
        default: [{}]
    }
})

export const User = mongoose.models.User || mongoose.model("User", userSchema)