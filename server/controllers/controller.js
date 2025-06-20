// get all questions
export async function getQuestions(req, res) {
  res.json("Question API get Request");
}

// insert all questions
export async function insertQuestions(req, res) {
  res.json("Question API post Request");
}

// Delete all questions
export async function dropQuestion(req, res) {
  res.json("Question API delete Request");
}

// get all result
export async function getResult(req, res) {
  res.json("Result API delete Request");
}

// post all result
export async function storeResult(req, res) {
  res.json("Result API post Request");
}

// delete all result
export async function dropResult(req, res) {
  res.json("Result API delete Request");
}
