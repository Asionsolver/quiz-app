import { createSlice } from "@reduxjs/toolkit";

/** @create_reducer */

export const questionReducer = createSlice({
  name: "question",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      let { question, answers } = action.payload;
      return {
        ...state,
        queue: question,
        answers,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePreviousAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePreviousAction,
  resetAction,
} = questionReducer.actions;
export default questionReducer.reducer;
