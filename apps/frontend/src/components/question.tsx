import { useState } from "react";
import { useAnswerQuestion } from "../util/answer-question";

interface QuestionProps {
    question : {
        _id: string;
        questionText: string;
        author: string;
        answer: string;
    };
    loggedIn: boolean;
}

export default function Question({ question, loggedIn }: QuestionProps) {
    const {questionText, author, answer, _id} = question;
    const [currAnswer, setAnswer] = useState('');
    const answerQuestion = useAnswerQuestion();
    
    return (
        <div className="space-y-20">
            <div className="space-y-4">
                <h1 className="text-7xl font-semibold text-teal-800">{questionText}</h1>
                <p className="text-2xl"> Author: {author}</p>
                <p className="text-2xl"> Answer: {answer}</p>
            </div>
            {loggedIn && 
            <div className="flex flex-col space-y-2 w-[800px]">
                <p className="text-2xl">Answer this question</p>
                <textarea
                    className="border border-teal-800 rounded h-10 w-full h-[200px]"
                    value={currAnswer}
                    onChange={(event) => setAnswer(event.target.value)}
                />
                <button className="btn bg-teal-800 text-white font-bold rounded w-full h-[45px]" onClick={() => answerQuestion(_id, currAnswer)}>
                    Submit
                </button>
            </div>}
        </div>
    );
}

