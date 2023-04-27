import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact="true" to="/" className="active-link">Your Library</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" className="active-link">Add New Book</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;