import React from "react";
import { useContext } from 'react';
import AuthContext from '../context/authContext'
import './SignOut.css'

function SignOut() {
    const authCtx = useContext(AuthContext);

    const handleClick = () => {
        authCtx.logout()
    }
    return (
        <div className="signout-contatiner">
            <button className="signout_btn" onClick={handleClick}>Sign Out</button>
        </div>
        
    );
};

export default SignOut;