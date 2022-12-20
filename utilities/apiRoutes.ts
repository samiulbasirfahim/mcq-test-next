const baseApi = process.env.enviroment === "dev" ? "http://localhost:3000/api" : "https://mcq-test-next.vercel.app/api"
const getCategory = baseApi + "/category/get"
const createQuestion = baseApi + "/question/create"
const getQuestion = baseApi + "/question/get"

export default { getCategory, getQuestion, createQuestion }