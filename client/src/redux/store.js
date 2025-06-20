import { combineReducers, configureStore } from "@reduxjs/toolkit";

/** @call_reducers */
import questionReducer from "./question_reducer";
import resultReducer from "./result_reducer";

const rootReducer = combineReducers({
  question: questionReducer,
  result: resultReducer,
});

/** @create store with reducer */
export default configureStore({ reducer: rootReducer });
