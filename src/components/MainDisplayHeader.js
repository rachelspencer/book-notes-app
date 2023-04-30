import React from "react";
import SignOut from "./SignOut";
import './MainDisplayHeader.css'

function MainDisplayHeader() {
    return (
        <div className="header_container">
            <h2>BookNotes</h2>
            <SignOut/>
        </div>
    );
};

export default MainDisplayHeader;