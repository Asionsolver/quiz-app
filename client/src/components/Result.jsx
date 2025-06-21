
import { Link } from 'react-router'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attemptsNumber, earnPointsNumber, flagResult } from '../helper/helper';
import { usePublishResult } from '../hooks/setResult';



export default function Result() {
    const dispatch = useDispatch();
    const { question: { queue, answers }, result: { result, userId } } = useSelector(state => state)


    function onRestart() {
        console.log('on Restart')
        dispatch(resetAction());
        dispatch(resetResultAction());
    }

    const totalPoints = queue.length * 10;
    const totalQuestion = totalPoints / 10;
    const attempts = attemptsNumber(result)
    const earnPoint = earnPointsNumber(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoint)
    // store user result
    usePublishResult({ result, username: userId, attempts, points: earnPoint, achieve: flag ? "Passed" : "Failed" })
    // console.log({ result, username: userId, attempts, points: earnPoint, achieved: flag ? "Passed" : "Failed" })
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <div className='mt-10 flex-center'>
                <div className='flex-box'>
                    <span>Username</span>
                    <span className='font-bold'>Daily Tuition</span>
                </div>
                <div className='flex-box'>
                    <span>Total Quiz Points : </span>
                    <span className='font-bold'>{totalPoints || 0}</span>
                </div>
                <div className='flex-box'>
                    <span>Total Questions : </span>
                    <span className='font-bold'>{totalQuestion || 0}</span>
                </div>
                <div className='flex-box'>
                    <span>Total Attempts : </span>
                    <span className='font-bold'>{attempts || 0}</span>
                </div>
                <div className='flex-box'>
                    <span>Total Earn Points : </span>
                    <span className='font-bold'>{earnPoint || 0}</span>
                </div>
                <div className='flex-box'>
                    <span>Quiz Result</span>
                    <span className={`font-bold ${flag ? "text-[#2aff95]!" : "text-[#ff2166]!"}`}>{flag ? 'Passed' : 'Failed'}</span>
                </div>
            </div>

            <div className="start">
                <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>
            <div className="container">
                {/* result table */}
                <ResultTable></ResultTable>
            </div>

        </div>
    )
}