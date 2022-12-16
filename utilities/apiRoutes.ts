
export let api: any = {}

const hostname = "http://localhost:3000"
api.getQuestion = hostname + "/api/question/get"
api.createQuestion = hostname + "/api/question/create"
api.getCategories = hostname + "/api/category/get"