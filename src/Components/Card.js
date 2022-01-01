import React from 'react';


function Card() {
    return (
        <div className="countries-list-wrapper">

            <div class="countries-cards-container min-max-width">
                <div class="country-card" onclick="singleCountryHelper('${data[i].name}')">
                    <img src="./images/flag.jpg" alt="Flag" />
                    <div class="country-details-sm">
                        <h4>France</h4>
                        <p class="special-info"><span class="card-detail-sm small-title">Population: </span> 80.000.000</p>
                        <p class="special-info"><span class="card-detail-sm small-title">Region: </span>Europe</p>
                        <p class="special-info"><span class="card-detail-sm small-title">Capital: </span>Paris</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card;