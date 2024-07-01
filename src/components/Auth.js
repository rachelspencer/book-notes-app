import { useContext, useState } from "react";
import supabase from '../config/supabaseClient';
import AuthContext from "../context/authContext";
import zxcvbn from 'zxcvbn';
import './Auth.css';

function Auth() {
    const authCtx = useContext(AuthContext);
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ register, setRegister ] = useState(true);
    const [ pwSuggestions, setPwSuggestions ] = useState([]);

    const handleEmail = (event) => {
        setEmail(event.target.value)
        console.log(email)
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
        const evaluation = zxcvbn(event.target.value);
      
        setPwSuggestions(evaluation.feedback.suggestions)
    };

    const handleClick = (event) => {
        setRegister(!register)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (register){
               const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                })
                console.log("data from signUp:", data);

                if (error){
                    console.log('error', error.message);
                    return alert(error.message)
                }

                const { user } = data;
                const { id, user_metadata } = user;
                
                if (id && !user_metadata.email_verified) {
                    return alert('Please check your email to confirm your account')
                }
            } else {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                console.log("data from signInWithPassword:", data);

                if (error){
                    return alert("Error in signing in. If you've already signed up, check your email for a confirmation email.")
                }
                getUserSession();

            }
     
        } catch (error) {
            console.log('FE signUp/signIn Error: ', error);

            setEmail('');
            setPassword('');
        }

    };

        const getUserSession = async () => {

            try {
                
                const { data, error } = await supabase.auth.getSession()
               
                authCtx.login(data.session.access_token, data.session.user.id)

                if (error){
                    alert("Error in retrieving session data: ", error)
                }
            } catch (error) {
                console.log("Error fetching current user: ", error)
            }

        }

    return (
        <main>
            <h1>Book Memos</h1>
            <h3 className="landing_page_tag">Your digital library.</h3>
            <div className="login">
                <form className ="auth_form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        className="email_pw_input"
                        value={email}
                        type="text"
                        id="email"
                        onChange={handleEmail}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        className="email_pw_input"
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