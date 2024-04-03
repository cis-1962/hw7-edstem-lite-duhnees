import { useState } from "react";
import { useAddQuestion } from "../util/add-question";

interface AddProps {
    load: boolean;
    onChange: (boolean) => void;
}

export default function AddQuestion({ load, onChange } : AddProps) {
    const [question, setQuestion] = useState('');
    const addQuestion = useAddQuestion();

    return load ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col space-y-4 w-[600px] text-left">
                <p className="text-2xl text-teal-800">
                    Ask question</p>
                <textarea
                    className="border border-teal-800 rounded h-[200px]"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                />
                <button className="w-full h-10 bg-teal-800 font-bold text-white rounded" 
                    onClick={() => {addQuestion(question); setQuestion(''); onChange(false)}}>
                    Submit
                </button>
                <button className="w-full h-10 border border-teal-800 font-bold text-teal-800 rounded" 
                    onClick={() => onChange(false)}> 
                    Close
                </button>
            </div>
        </div> 
        ) : (
            null
        );
    
}