import { useContext, useState } from "react";
import axios from 'axios';
import AuthContext from "../context/authContext";
import './Auth.css';

function Auth() {
    const authCtx = useContext(AuthContext);

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ register, setRegister ] = useState(true);

    const handleUsername = (event) => {
        setUsername(event.target.value)
        console.log(username)
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
        console.log(password)
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
            // setShowModal(true);
            }
        console.log('response auth FE', response);
        authCtx.login(response.data.token, response.data.exp, response.data.userId)
        };
    
    // create a form to capture user inputs
    return (
        <main>
            <h1>BookNotes</h1>
            <h3>notes and quotes for books you've read</h3>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <input
                        className="tbd"
                        placeholder="Username"
                        value={username}
                        type="text"
                        onChange={handleUsername}
                    />
                    <input
                        className="tbd"
                        placeholder="Password"
                        value={password}
                        type="text"
                        onChange={handlePassword}
                    />
                    <button className="tbd">
                        {register ? "Register" : "Login"}
                    </button>
                </form>
                <button
                    className="tbd" onClick={handleClick}>Need to {register? "Login" : "Register"}?</button>
            </div>
        </main>
    );
};

export default Auth;