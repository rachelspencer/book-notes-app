import { useContext, useState } from "react";
import axios from 'axios';
import AuthContext from "../context/authContext";
import zxcvbn from 'zxcvbn';
import './Auth.css';

function Auth() {
    const authCtx = useContext(AuthContext);

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ register, setRegister ] = useState(true);
    const [ pwSuggestions, setPwSuggestions ] = useState([]);

    const handleUsername = (event) => {
        setUsername(event.target.value)
        console.log(username)
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
        const evaluation = zxcvbn(password)
        console.log("Evaluation:", evaluation)
        setPwSuggestions(evaluation.feedback.suggestions)
    };

    const handleClick = (event) => {
        setRegister(!register)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response;

        const body = {
            username,
            password,
        };

        const url = "http://localhost:3001"

        try {
            if (register){
                response = await axios.post(`${url}/register`, body)
            } else {
                response = await axios.post(`${url}/login`, body)
            }
        } catch (error) {
            console.log('FE Error', error);
            setUsername('');
            setPassword('');
            }
        console.log('response auth FE', response);
        authCtx.login(response.data.token, response.data.exp, response.data.userId)
        };
    
    // capture user inputs through form
    return (
        <main>
            <h1>BookNotes</h1>
            <h3 className="landing_page_tag">Your digital library.</h3>
            <div className="login">
                <form className ="auth_form" onSubmit={handleSubmit}>
                    <label className="auth_label" htmlFor="username">Username</label>
                    <input
                        className="username_pw_input"
                        value={username}
                        type="text"
                        id="username"
                        onChange={handleUsername}
                    />
                    <label className="auth_label" htmlFor="password">Password</label>
                    <input
                        className="username_pw_input"
                        value={password}
                        type="password"
                        id="password"
                        onChange={handlePassword}
                    />
                    {pwSuggestions.length > 0 && (
                        <ul>
                            {pwSuggestions.map((suggestion, index) => (
                                <li className="pw_suggestions" key={index}>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                    <button className="auth_btn">
                        {register ? "Register" : "Login"}
                    </button>
                </form>
                <button
                    className="auth_btn" onClick={handleClick}>Need to {register? "Login" : "Register"}?</button>
            </div>
        </main>
    );
};

export default Auth;