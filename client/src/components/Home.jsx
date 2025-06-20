import { Link } from "react-router"
import { useRef } from 'react'
import { useDispatch } from "react-redux"
import { setUserId } from "../redux/result_reducer"
const Home = () => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value));
        }
    }
    return (
        <>
            <div className="container">
                <h1 className='title text-light'>Quiz Application</h1>
                <ol className="pt-8 pl-2">
                    <li>1. You will be asked 10 questions one after another.</li>
                    <li>2. 10 points is awarded for the correct answer.</li>
                    <li>3. Each question has three options. You can choose only one options.</li>
                    <li>4. You can review and change answers before the quiz finish.</li>
                    <li>5. The result will be declared at the end of the quiz.</li>
                </ol>

                <form id="form">
                    <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
                </form>

                <div className='start'>
                    <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
                </div>
            </div>
        </>
    )
}

export default Home