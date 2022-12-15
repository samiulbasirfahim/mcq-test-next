import { model, models, Schema } from "mongoose";

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
        validate: [arrayValidate, "{PATH} exceeds the limit of 4"]
    },
    correctIndex: {
        type: Number,
        min: 0,
        max: 3,
    },
})

function arrayValidate(val: any) {
    return val.length <= 4
}

const Question = models.Question || model("Question", questionSchema)

export default Question