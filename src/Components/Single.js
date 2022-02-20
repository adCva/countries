import React from 'react';


function Single() {
    return (
        <div className="single-country-info-wrapper">
            <img src="./images/flag.jpg" alt="Flag" className="country-flag"/>
            <div className="country-info-container">
                <h3>France</h3>
                <div className="country-info-grid">
                    <div className="first-grid">
                        <p><span>Population: </span>80.000.000</p>
                        <p><span>Native name: </span>France</p>
                        <p><span>Region: </span>Europe</p>
                        <p><span>Sub Region: </span>Western Europe</p>
                        <p><span>Capital: </span>Paris</p>
                    </div>
                    <div className="second-grid">
                        <p><span>Top Level Domain: </span>.fr</p>
                        <p><span>Currencies: </span>EUR</p>
                        <p><span>Languages: </span>Francais</p>
                    </div>
                </div>
                <div className="border-countries-wrapper">
                    <h4>Border Countries:</h4>
                    <div className="border-countries-container">
                        <p>Belgium</p>
                        <p>Spain</p>
                        <p>Luxemburg</p>
                        <p>Swiss</p>
                        <p>Italy</p>
                        <p>Germany</p>
                    </div>
                </div>
            </div>
        </div>
    )}

export default Single;