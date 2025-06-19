import { useEffect, useState } from "react";
import data from "./database/data";

const Questions = () => {
    const [checked, setChecked] = useState(undefined);

    const onSelect = () => {
        // setChecked(value);
        console.log("first")
    };

    const question = data[0]
    useEffect(() => {
        console.log(question)
    })

    return (
        <div className="p-12">
            <h2 className="text-light text-xl font-semibold mb-4">{question.question}</h2>

            <ul className="list-none m-0 p-0" key={question.id}>
                {
                    question.options.map((q, i) => (
                        <li className="relative group text-[#AAAAAA] block w-full h-[100px] border-b border-[#333]" key={i}>
                            <input
                                type="radio"
                                name="options"
                                id={`q${i}-option`}
                                value={false}
                                onChange={onSelect()}
                                className="absolute invisible peer"
                            />
                            <label
                                htmlFor={`q${i}-option`}
                                className="block relative font-light text-[1em] px-[25px] py-[30px] pl-[62px] my-[10px] mx-auto h-[30px] z-[9] cursor-pointer transition-all duration-200 ease-linear group-hover:text-white peer-checked:text-primary"
                            >
                                {q}
                            </label>
                            <div className="absolute border-[5px] border-[#AAAAAA] rounded-full h-[25px] w-[25px] top-[30px] left-[20px] z-[5] transition-[border] duration-200 ease-linear peer-checked:border-primary group-hover:border-white before:content-[''] before:absolute before:rounded-full before:h-[12px] before:w-[12px] before:top-[2px] before:left-[2px] before:transition-colors before:duration-200 peer-checked:before:bg-primary" />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Questions;
