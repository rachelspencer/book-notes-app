import { useContext, useState } from "react";
import axios from 'axios'
import AuthContext from "../context/authContext";

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
            password
        };

        const url = "http://localhost:3001"

        try {
            if (register){
                response = await axios.post(`${url}/register`, body)
                console.log("Register body FE:", body)
                response = body
            } else {
                response = await axios.post(`${url}/login`, body)
                console.log("Login details FE:", body)
                response = body
            }
        } catch (error) {
            console.log(error)
            setUsername('')
            setPassword('')
            }
        console.log('response auth FE', response);
        // authCtx.login(response.data.login, response.data.userId, response.data.token)
        }
    
    // create a form to capture user inputs
    return (
        <main>
            <form className="tbd" onSubmit={handleSubmit}>
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
            <button className="tbd" onClick={handleClick}>Need to {register? "Login" : "Register"}?</button>
        </main>
    );
};

export default Auth;