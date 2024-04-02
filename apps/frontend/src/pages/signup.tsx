import { useState } from "react";
import TextInput from "../components/textInput";
import { Link } from "react-router-dom";


export default function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                onClick={() => console.log('fart')}>
                Sign Up
            </button>
            <p> Already have an account? </p>
            <Link to="/login"> Log in here! </Link>
        </div>
    );
}