const baseApi = process.env.enviroment === "dev" ? "http://localhost:3000/api" : "https://quez.vercel.app/api"
// const baseApi = "http://localhost:3000/api"
const getCategory = baseApi + "/category/get"
const createQuestion = baseApi + "/question/create"
const getQuestion = baseApi + "/question/get"

export default { getCategory, getQuestion, createQuestion }