import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
import logo from '../images/notember.png'

const Navigation = () => {
    return (
        <div id="menu">
            <NavLink to="/"><img id='logo' src={logo} alt="logo"></img></NavLink>
            <span id="menuLink">
                <NavLink style={{ marginRight: 10 }} to="/statistics">Statistics</NavLink>
                <NavLink style={{ marginRight: 10 }} to="/about">About Us</NavLink>            </span>
        </div>
    );
}

export default Navigation;