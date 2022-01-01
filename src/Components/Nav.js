import React, { useState } from 'react';
import { FaSun, FaRegMoon } from "react-icons/fa";


function Nav() {
    const [ darkMode, setDarkMode ] = useState(false);

    const changeViewMode = () => {
        setDarkMode(!darkMode);
    };



    return (
        <div className="navbar-wrapper">
            <div className="navbar-container min-max-width">
                <h3>Where in the world ?</h3>
                <button className="dark-mode-btn" onClick={changeViewMode}><span>{darkMode ? <FaSun />  : <FaRegMoon />}</span> {darkMode ? "Light Mode"  : "Dark Mode"}</button>
            </div>            
        </div>
    )
}

export default Nav;