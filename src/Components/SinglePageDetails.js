import React from 'react';
// Redux.
import { useSelector } from 'react-redux';

function SinglePageDetails() {
    // Redux state.
    const viewMode = useSelector(state => state.viewMode.darkMode);


    return (
        <div className={viewMode ? "single-country-big-wrapper single-country-big-wrapper-dark" : "single-country-big-wrapper single-country-big-wrapper-light"}>
            {/* ===================== Flag ===================== */}
            <div className="country-flag">
                <img src="./images/flag.jpg" alt="Flag" />
            </div>

            <div className="other-details-wrapper">
                <h3>France</h3>
                {/* ===================== Details ===================== */}
                <div className="two-panels-container">
                    <div className="first-panel">
                        <p><span>Population: </span>population</p>
                        <p><span>Native name: </span>france</p>
                        <p><span>Region: </span>europe</p>
                        <p><span >Sub Region: </span> western europe</p>
                        <p><span>Capital: </span>paris</p>
                    </div>
                    <div className="second-panel">
                        <p><span>Top Level Domain: </span>.fr</p>
                        <p><span>Currencies: </span>eur</p>
                        <p><span>Languages: </span>french</p>
                    </div>
                </div>
                {/* ===================== Borders ===================== */}
                <div className="border-wrapper">
                    <h4>Border Countries:</h4>
                    <div className="borders-countires">
                        <p>spain</p>
                        <p>germany</p>
                        <p>belgium</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePageDetails;