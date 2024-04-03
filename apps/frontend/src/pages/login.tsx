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
        <div className="bg-pink-200 flex flex-col float-left p-6 fixed top-0 left-0 w-full h-full space-y-4">
            <h1 className="font-serif text-4xl float-left"> 
                Log In </h1>
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
                className="btn w-[300px] h-10 bg-purple-500 rounded"
                onClick={async () => {
                    try {
                        const response = await signupOrLogin('/api/account/login', username, password);
                        if (response === 200) {
                            navigate('/');
                        }
                    } catch (error) {
                        // eslint-disable-next-line no-alert
                        alert(error.message);
                    }}}>
                Log In
            </button>
            <div>
                <p> Don&apos;t have an account? </p>
                <Link className="font-semibold text-purple-500" to="/signup"> Sign up here! </Link>
            </div>
        </div>
    );
}