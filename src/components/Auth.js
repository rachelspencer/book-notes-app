import { useContext, useState } from "react";
import supabase from '../config/supabaseClient';
import AuthContext from "../context/authContext";
import zxcvbn from 'zxcvbn';
import './Auth.css';

function Auth() {
    const authCtx = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwSuggestions, setPwSuggestions] = useState([]);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
        const evaluation = zxcvbn(event.target.value);
        setPwSuggestions(evaluation.feedback.suggestions);
    };

    const handleRegister = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                console.log('error', error.message);
                return alert(error.message);
            }

            const { user } = data;
            const { id, user_metadata } = user;

            if (id && !user_metadata.email_verified) {
                return alert('Please check your email to confirm your account');
            }

            await getUserSession();
        } catch (error) {
            console.log('Error in signUp:', error);
            setEmail('');
            setPassword('');
        }
    };

    const handleLogin = async () => {
        try {
            
            const { error } = await supabase.auth.signIn({
                email,
                password,
            });

            if (error) {
                return alert("Error in signing in. If you've already signed up, check your email for a confirmation email.");
            }

            await getUserSession();
        } catch (error) {
            console.log('Error in signIn:', error);
            setEmail('');
            setPassword('');
        }
    };

    const getUserSession = async () => {
        try {
            const { data, error } = await supabase.auth.getSession();

            if (data) {
                authCtx.login(data.access_token, data.user.id);
            }

            if (error) {
                alert("Error in retrieving session data: ", error);
            }
        } catch (error) {
            console.log("Error fetching current user: ", error);
        }
    };

    return (
        <main>
            <h1>Book Memos</h1>
            <h3 className="landing_page_tag">Your digital library.</h3>
            <div className="login">
                <form className="auth_form">
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
                </form>
                <button className="auth_btn" onClick={handleRegister}>Register</button>
                <button className="auth_btn" onClick={handleLogin}>Login</button>
            </div>
        </main>
    );
}

export default Auth;
