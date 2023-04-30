import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav_container">
            <nav>
                <ul className="nav_style">
                    <li id="your-library" className="link_text_style">
                        <NavLink exact="true" to="/" className="active-link">Your Library</NavLink>
                    </li>
                    <li id="add-new" className="link_text_style">
                        <NavLink to="/add" className="active-link">Add New Book</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;