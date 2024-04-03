import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddQuestion from "./addQuestion";

interface buttonProps {
    loggedIn: boolean
}

export default function HomeButton( { loggedIn } : buttonProps) {
    const navigate = useNavigate();
    const [addingQ, setAddingQ] = useState(false);

    return loggedIn ? (
        <div>
            <button className="btn w-[400px] h-[60px] bg-white rounded font-bold text-teal-800" onClick={() => setAddingQ(true)}>
                Add new question
            </button>
            {addingQ && <AddQuestion load={addingQ} onChange={setAddingQ} />}
        </div>
        ) : (
            <button className="btn w-[400px] h-10 bg-white rounded font-bold text-teal-800" onClick={() => navigate('/login')}>
                Login to submit a question
            </button>
        );
    
}