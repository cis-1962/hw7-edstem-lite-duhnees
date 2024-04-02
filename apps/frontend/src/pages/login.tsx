import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/textInput";
import { useSignUpLogin } from "../util/signup-login";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const signupOrLogin = useSignUpLogin();
    const navigate = useNavigate();

    return (
        <div>
            <h1> Log In </h1>
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
                        const response = await signupOrLogin('/api/account/login', username, password);
                        //const response = await signup(username, password);
                        if (response === 200) {
                            navigate('/');
                        }
                    } catch (error) {
                        // eslint-disable-next-line no-alert
                        alert(error.message);
                    }}}>
                Log In
            </button>
            <p> Don&apos;t have an account? </p>
            <Link to="/signup"> Sign up here! </Link>
        </div>
    );
}