import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../context/authContext'
import './SignOut.css'

function SignOut() {
    const authCtx = useContext(AuthContext);

    const handleClick = () => {
        authCtx.logout()
    }
    return (
        <div className="signout-contatiner">
            <Link exact to="/auth">
                <button className="signout_btn" onClick={handleClick}>Sign Out</button>
            </Link>
        </div>
        
    );
};

export default SignOut;