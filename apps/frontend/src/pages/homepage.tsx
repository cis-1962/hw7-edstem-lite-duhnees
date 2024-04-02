import { useEffect, useState } from "react";
import { fetchCurrUser, fetchQuestions } from "../util/fetchers";
import HomeButton from "../components/homeButton";
import Question from "../components/question";

//first figure out how to render all qs, then do individual qs, then answering/posting them
//lefthand container w/ button & list of qs - honestly can this just be done here?? don't think i need a separate component for something so simple
//righthand container w/ displayed question
//header w/ title, logout button if logged in
//how to handle selected question????????
export default function Homepage() {
    const [questions, setQuestions] = useState([]);
    const [user, setUser] = useState('');
    const [currQuestion, setQuestion] = useState(null);

    //loading in questions + current user
    useEffect(() => {
        async function getData() {
            setQuestions([await fetchQuestions()][0]);
            setUser(JSON.stringify(await fetchCurrUser()));
            setQuestion(questions[0]);
        }
        getData();
    }, []);
 
    //checking that current user is nonempty
    const loggedIn = user !== '';

    return (
        <div>
            <div>
                <HomeButton loggedIn={loggedIn} />
                {questions.map((question) => (
                    //ADDRESS THIS LATER
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                    <div key={question._id} onClick={() => setQuestion(question)}>{question.questionText}</div>
                ))}
            </div>
            <div>
                {currQuestion && <Question question={currQuestion} loggedIn={loggedIn} />}
            </div>
        </div>
    );
}