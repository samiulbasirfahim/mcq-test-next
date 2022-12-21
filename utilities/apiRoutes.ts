let baseApi = "https://quez.vercel.app/api";
// let baseApi = "http://localhost:3000/api";

const getCategory = baseApi + "/category/get"
const createQuestion = baseApi + "/question/create"
const getQuestion = baseApi + "/question/get"
const createUser = baseApi + "/user/create"
const loginUser = baseApi + "/user/login"
const deleteQuestion = baseApi + "/question/delete"
const editQuestion = baseApi + "/question/edit"
export default { getCategory, getQuestion, createQuestion, createUser, loginUser, deleteQuestion, editQuestion }