
import Questions from "./Questions";
import { useDispatch, useSelector } from "react-redux"
import { MoveNextQuestion, MovePreviousQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router";

export const Quiz = () => {
    const [checked, setChecked] = useState(undefined);
    const result = useSelector(state => state.result.result)
    const { trace, queue } = useSelector(state => state.question)

    const dispatch = useDispatch()


    useEffect(() => {
        // console.log(result)
    })
    /** @Next button event handler */

    const handleNext = () => {
        if (trace < queue.length) {
            /** update the trace value by one using MoveNextAction */
            // console.log(trace)
            dispatch(MoveNextQuestion())

            // insert a new result in the array
            if (result.length <= trace) {
                dispatch(PushAnswer(checked))
            }
        }

        // reset the value of the checked variable
        setChecked(undefined)
    }


    /** @Prev button event handler*/

    const handlePrev = () => {
        if (trace > 0) {
            console.log("On previous Click");
            dispatch(MovePreviousQuestion())
        }
    }

    const onChecked = (check) => {
        // console.log(check);
        setChecked(check)
    }

    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace='true'></Navigate>
    }
    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            {/* Display Question */}
            <Questions onChecked={onChecked} />
            <div className="grid">
                {trace > 0 ? <button className="btn prev" onClick={handlePrev}>Prev</button> : <div></div>}
                <button className="btn next" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
