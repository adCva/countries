import React from 'react';
// ========= Icons.
import { BsFillMoonStarsFill, BsFillCloudSunFill } from "react-icons/bs";
// ========= Redux.
import { useSelector, useDispatch } from 'react-redux';
import { changeViewMode } from "../Features/viewModeSlice";



function Nav() {
    // ========= Redux state & dispatch.
    const viewMode = useSelector(state => state.viewMode.darkMode);
    const dispatch = useDispatch();

    
    return (
      <div className={viewMode ? "navbar-wrapper-dark" : "navbar-wrapper-light"} id="navbar">
          <div className="navbar-container min-max-width">
              <h3>Where in the world ?</h3>
              <button onClick={() => dispatch(changeViewMode())}><span>{viewMode ? <BsFillCloudSunFill />  : <BsFillMoonStarsFill />}</span> {viewMode ? "Light Mode"  : "Dark Mode"}</button>
          </div>            
      </div>
    )
}

export default Nav;