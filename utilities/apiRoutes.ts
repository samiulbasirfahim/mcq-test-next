let baseApi = "https://quez.vercel.app/api";

const getCategory = baseApi + "/category/get"
const createQuestion = baseApi + "/question/create"
const getQuestion = baseApi + "/question/get"

export default { getCategory, getQuestion, createQuestion }