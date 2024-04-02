import { useNavigate } from "react-router-dom";

interface buttonProps {
    loggedIn: boolean
}

export default function HomeButton( { loggedIn } : buttonProps) {
    const navigate = useNavigate();
    return loggedIn ? (
            <button>
                Add new question
            </button>
        ) : (
            <button onClick={() => navigate('/login')}>
                Login to submit a question
            </button>
        );
    
}