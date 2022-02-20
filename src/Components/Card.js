import React from 'react';
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { openSinglePageDetails } from "../Features/viewModeSlice";



function Card() {
  // Redux state & dispatch.
  const viewMode = useSelector(state => state.viewMode.darkMode);
  const dispatch = useDispatch();


  return (
    <div className={viewMode ? "country-card country-card-dark" : "country-card country-card-light"} onClick={() => dispatch(openSinglePageDetails())}>
        {/* ===================== Flag ===================== */}
        <div className="country-flag-container">
            <img src="./images/flag.jpg" alt="Flag" />
        </div>
        {/* ===================== Details ===================== */}
        <div className="country-short-details">
            <h4>United kingdom of northern ireland and wales</h4>
            <p><span>Population: </span> 80.000.000</p>
            <p><span>Region: </span>Europe</p>
            <p><span>Capital: </span>Paris</p>
        </div>
    </div>
  )
}

export default Card;