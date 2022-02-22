import React from 'react';
// Redux.
import { useSelector } from 'react-redux';

function SinglePageDetails() {
    // Redux state.
    const viewMode = useSelector(state => state.viewMode.darkMode);
    const countryDetails = useSelector(state => state.singlePage.singleCountryData[0]);

    let clickMe = () => {
        fetch(`https://restcountries.com/v3.1/all`)
                .then((res) => res.json()).then(resData => console.log(resData))
    }

    return (
        <div className={viewMode ? "single-country-big-wrapper single-country-big-wrapper-dark" : "single-country-big-wrapper single-country-big-wrapper-light"}>
            {/* ===================== Flag ===================== */}
            <div className="country-flag">
                <img src={countryDetails.flags.png} alt="Flag" />
            </div>

            <div className="other-details-wrapper">
                <h3>{countryDetails.name.common}</h3>
                {/* ===================== Details ===================== */}
                <div className="two-panels-container">
                    <div className="first-panel">
                        <p><span>Population: </span>{countryDetails.population.toLocaleString("en-US")}</p>
                        <p><span>Native name: </span>{countryDetails.name.nativeName.official}</p>
                        <p><span>Region: </span>{countryDetails.region}</p>
                        <p><span >Sub Region: </span>{countryDetails.subregion}</p>
                        <p><span>Capital: </span>{countryDetails.capital}</p>
                    </div>
                    <div className="second-panel">
                        <p><span>Top Level Domain: </span>{countryDetails.tld}</p>
                        <p><span>Currencies: </span>{countryDetails.currencies.name}</p>
                        <p><span>Languages: </span>{countryDetails.languages.cca3}</p>
                    </div>
                </div>
                {/* ===================== Borders ===================== */}
                <div className="border-wrapper">
                    <h4>Border Countries:</h4>
                    <div className="borders-countires">
                        {countryDetails.borders.map((el, i) => (
                            <p key={i}>{el}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePageDetails;