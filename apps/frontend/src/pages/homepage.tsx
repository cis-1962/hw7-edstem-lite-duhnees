import { useState } from "react";
import { fetcher } from "../util/fetchers";
import HomeButton from "../components/homeButton";
import Question from "../components/question";
import { useLogout } from "../util/logout";
import useSWR from "swr";

export default function Homepage() {
    const [currQuestion, setQuestion] = useState(null);
    const {data: questions} = useSWR('/questions', fetcher, { refreshInterval: 2000 });
    const {data: user} = useSWR('/api/account', fetcher, { refreshInterval: 2000 });
    const logout = useLogout();
 
    //checking that current user is nonempty
    const loggedIn = user !== '';

    return (
        <div className="bg-teal-300 p-6 fixed top-0 left-0 w-full h-full flex items-start space-x-8">
            <div className="float-left">
                <HomeButton loggedIn={loggedIn} />
                <div className="grid grid-cols-1 flex">
                    {questions && questions.map((question) => (
                        <button className="btn w-[400px] h-[60px] border-b border-teal-800 text-teal-800 font-semibold"
                            key={question._id} 
                            onClick={() => setQuestion(question)}>
                            {question.questionText}
                        </button>
                    ))}
                </div>
            </div>
            <div className="top-0 float-right">
                {currQuestion ? <Question question={currQuestion} loggedIn={loggedIn} /> : (questions && <Question question={questions[0]} loggedIn={loggedIn} />)}
            </div>
            {loggedIn &&
                <div className="flex items-start space-x-4">
                    <p className="text-teal-800">Hi {user}</p>
                    <button className="btn text-teal-800 font-semibold" onClick={async () => logout()}>
                        Logout
                    </button>
                </div> }
        </div>
    );
}