interface QuestionProps {
    question : {
        questionText: string;
        author: string;
        answer: string;
    };
    loggedIn: boolean;
}

export default function Question({ question, loggedIn }: QuestionProps) {
    const {questionText, author, answer} = question;
    return (
        <div>
            <h1>{questionText}</h1>
            <p>By: {author}</p>
            <p>Answer: {answer}</p>
            {/* {loggedIn && <input>
            
            
            </input>} */}
        </div>
    );
}

