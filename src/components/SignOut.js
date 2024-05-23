import React from "react";
import { useContext } from 'react';
import supabase from '../config/supabaseClient';
import { Link } from "react-router-dom";
import AuthContext from '../context/authContext'
import './SignOut.css'

function SignOut() {
    const authCtx = useContext(AuthContext);

    const handleClick = async () => {
        try {
            const { error } = await supabase.auth.signOut()

            if (error){
                console.log("Error signing out user", error)
            }
        } catch (error) {
            console.log(error)
        }
        authCtx.logout()
    }

    return (
        <div className="signout-contatiner">
            <Link to="/auth">
                <button className="signout_btn" onClick={handleClick}>Sign Out</button>
            </Link>
        </div>
        
    );
};

export default SignOut;