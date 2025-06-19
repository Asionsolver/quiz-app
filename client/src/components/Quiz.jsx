import Questions from "./Questions";


export const Quiz = () => {

    /**
     * @Next button event handler
     */
    const handleNext = () => {
        console.log("On next Click");
    }

    /**
     * @Prev button event handler
     */
    const handlePrev = () => {
        console.log("On previous Click");
    }
    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            {/* Display Question */}
            <Questions />
            <div className="grid">
                <button className="btn prev" onClick={handlePrev}>Prev</button>
                <button className="btn next" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
