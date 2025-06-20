import Questions from "../model/questionSchema.js";
import Results from "../model/resultSchema.js";
import questions, { answers } from "../database/data.js";

// get all questions
export async function getQuestions(req, res) {
  try {
    const ques = await Questions.find();
    res.json(ques);
  } catch (error) {
    res.json({ error });
  }
}

// insert all questions
export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers });
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

// Delete all questions
export async function dropQuestion(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Question Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

// get all result
export async function getResult(req, res) {
  try {
    const res = await Results.find();
    res.json(res);
  } catch (error) {
    res.json({ error });
  }
}

// post all result
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, point, achieve } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");
    Results.create({ username, result, attempts, point, achieve });
    res.json({ msg: "Result Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

// delete all result
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
