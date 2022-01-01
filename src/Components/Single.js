import React from 'react';


function Single() {
    return (
        <div className="single-country-wrapper">
            <div className="single-country-container">
                <img src="./images/flag.jpg" alt="Flag" />
                <div className="single-country-details">
                    <h3>France</h3>
                    <div className="two-panels">
                        <div class="first-panel">
                            <p class="special-info"><span class="country-detail-sm small-title">Population: </span>80.000.000</p>
                            <p class="special-info"><span class="country-detail-sm small-title">Native name: </span> France</p>
                            <p class="special-info"><span class="country-detail-sm small-title">Region: </span>Europe</p>
                            <p class="special-info"><span class="country-detail-sm small-title">Sub Region: </span> Western Europe</p>
                            <p class="special-info"><span class="country-detail-sm small-title">Capital: </span>Paris</p>
                        </div>
                        <div class="second-panel">
                            <p class="special-info"><span class="country-detail-sm small-title">Top Level Domain: </span> .fr</p>
                            <p class="special-info"><span class="country-detail-sm small-title">Currencies: </span> EUR</p>
                            <p class="special-info"><span class="country-detail-sm small-title">Languages: </span> Francais</p>
                        </div>
                    </div>
                    <div class="border-container">
                        <h4>Border Countries:</h4>
                        <div class="border-wrapper">
                            <p class="neighbor">Belgium</p>
                            <p class="neighbor">Spain</p>
                            <p class="neighbor">Germany</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single;