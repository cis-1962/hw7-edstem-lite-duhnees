import { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                onClick={() => handleLogin()}>
                Log In
            </button>
            <p> Don&apos;t have an account? </p>
            <Link to="/signup"> Sign up here! </Link>
        </div>
    );
}