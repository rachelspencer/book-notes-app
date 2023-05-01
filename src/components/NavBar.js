import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav_container">
            <nav>
                <ul className="nav_style">
                    <li id="your-library" className="link_text_style">
                        <NavLink 
                            id="navlink"
                            exact="true"
                            to="/" 
                            className={
                                ({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Your Library
                        </NavLink>
                    </li>
                    <li id="add-new" className="link_text_style">
                        <NavLink 
                        id="navlink"
                        to="/add" 
                        className={
                            ({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                            Add New Book</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;