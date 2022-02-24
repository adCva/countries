import React from 'react';
import { startLoading } from "../Features/singlePageSlice";
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { getSingeCountryData } from "../Features/getSingleCountryMiddleware";
import { addCountryCode } from "../Features/singlePageSlice";



function SinglePageDetails() {
    // Redux state.
    const viewMode = useSelector(state => state.viewMode.darkMode);
    const countryDetails = useSelector(state => state.singlePage.singleCountryData[0]);
    const borderFullNames = useSelector(state => state.singlePage.translatedBorderingCountries);
    const dispatch = useDispatch();
    window.scrollTo(0, 0);

    // Click on border.
    const displayNewCountry = (countryCode, destination) => {
        dispatch(startLoading());
        dispatch(getSingeCountryData({countryCode: destination}));
        dispatch(addCountryCode({code: countryCode}));
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
                        <p><span>Native name: </span>{countryDetails.name.nativeName ? countryDetails.name.nativeName[Object.keys(countryDetails.name.nativeName)[0]].official : ""}</p>
                        <p><span>Region: </span>{countryDetails.region}</p>
                        <p><span >Sub Region: </span>{countryDetails.subregion}</p>
                        <p><span>Capital: </span>{countryDetails.capital ? countryDetails.capital : ""}</p>
                    </div>
                    <div className="second-panel">
                        <p><span>Top Level Domain: </span>{countryDetails.tld}</p>
                        <p><span>Currencies: </span>{countryDetails.currencies ? countryDetails.currencies[Object.keys(countryDetails.currencies)[0]].name : ""}</p>
                        <p><span>Languages: </span>{countryDetails.languages ? countryDetails.languages[Object.keys(countryDetails.languages)[0]] : ""}</p>
                    </div>
                </div>
                {/* ===================== Borders ===================== */}
                <div className="border-wrapper">
                    <h4>Border Countries:</h4>
                    <div className="borders-countires">
                        {countryDetails.borders === undefined ? (
                            <p>Island</p>
                        ) : (
                            countryDetails.borders.map((el, i) => (
                                <p key={i} onClick={() => displayNewCountry(countryDetails.cca3, el)}>{borderFullNames[el]}</p>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePageDetails;