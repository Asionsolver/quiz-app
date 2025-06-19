

const ResultTable = () => {
    return (
        <div>
            <table className="w-full table-fixed border-collapse">
                <thead className="bg-[#212121] text-[#cecece] text-[1.1em] text-center">
                    <tr className='table-row'>
                        <td className="border border-button px-4 py-[18px]">Name</td>
                        <td className="border border-button px-4 py-[18px]">Attemps</td>
                        <td className="border border-button px-4 py-[18px]">Earn Points</td>
                        <td className="border border-button px-4 py-[18px]">Result</td>
                    </tr>
                </thead>
                <tbody className="bg-[#d8d8d8] text-[1.1em] text-center">
                    <tr className=''>
                        <td className="px-4 py-[18px]">Daily Tuition</td>
                        <td className="px-4 py-[18px]">03</td>
                        <td className="px-4 py-[18px]">20</td>
                        <td className="px-4 py-[18px]">Passed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable