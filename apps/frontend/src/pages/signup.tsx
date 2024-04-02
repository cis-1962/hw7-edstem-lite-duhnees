import { useState } from "react";
import TextInput from "../components/textInput";
import { Link, useNavigate } from "react-router-dom";
//import { useSignUp } from "../util/fucking-whatever";
import { useSignUpLogin } from "../util/signup-login";


export default function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //const signup = useSignUp();
    const signupOrLogin = useSignUpLogin();

    return (
        <div>
            <h1> Sign Up </h1>
            <TextInput 
                title='Username'
                value={username}
                placeholder='Enter username'
                onChange={setUsername}
            />
            <TextInput 
                title='Password'
                value={password}
                placeholder='Enter password'
                onChange={setPassword}
            />
            <button
                type="button"
                className="btn bg-blue-500"
                onClick={async () => {
                    try {
                        const response = await signupOrLogin('/api/account/signup', username, password);
                        //const response = await signup(username, password);
                        if (response === 200) {
                            navigate('/');
                        }
                    } catch (error) {
                        // eslint-disable-next-line no-alert
                        alert(error.message);
                    }
                }}>
                Sign Up
            </button>
            <p> Already have an account? </p>
            <Link to="/login"> Log in here! </Link>
        </div>
    );
}