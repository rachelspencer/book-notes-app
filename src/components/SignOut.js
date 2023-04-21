import React from "react";
import { useContext } from 'react';
import AuthContext from '../context/authContext'

function SignOut() {
    const authCtx = useContext(AuthContext);

    const handleClick = () => {
        authCtx.logout()
    }
    return (
        <div onClick={handleClick}>
            <button className="tbd">Sign Out</button>
        </div>
    );
};

export default SignOut;