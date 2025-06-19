import React from 'react'
import { Link } from 'react-router'
import ResultTable from './ResultTable'



export default function Result() {

    function onRestart() {
        console.log('on Restart')
    }

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
                    <span className='font-bold'>50</span>
                </div>
                <div className='flex-box'>
                    <span>Total Questions : </span>
                    <span className='font-bold'>05</span>
                </div>
                <div className='flex-box'>
                    <span>Total Attempts : </span>
                    <span className='font-bold'>03</span>
                </div>
                <div className='flex-box'>
                    <span>Total Earn Points : </span>
                    <span className='font-bold'>30</span>
                </div>
                <div className='flex-box'>
                    <span>Quiz Result</span>
                    <span className='font-bold'>Passed</span>
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