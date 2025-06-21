import { useEffect, useState } from "react";
// import data, { answers } from "../components/database/data";
import { useDispatch } from "react-redux";

/** redux action */
import * as Action from "../redux/question_reducer";
import { getServerData } from "../helper/helper";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
    /** @async function fetch backend data */

    (async () => {
      try {
        // let question = await data;
        const [{ questions, answers }] = await getServerData(
          `${import.meta.env.VITE_SERVER_HOSTNAME}/api/questions`,
          (data) => data
        );
        console.log({ questions, answers });

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({
            ...prev,
            apiData: questions,
          }));

          /** dispatch an action */
          dispatch(Action.startExamAction({ question: questions, answers }));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};

/** @MoveAction dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};
export const MovePreviousQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePreviousAction());
  } catch (error) {
    console.log(error);
  }
};
