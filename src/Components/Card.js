import React, { useEffect } from 'react';
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { makeCountriesListAPICall } from "../Features/getCountriesMiddleware";
import { getSingeCountryData } from "../Features/getSingleCountryMiddleware";


function Card() {
  // Redux state & dispatch.
  const countriesList = useSelector(state => state.countriesList.countriesListObj);
  const viewMode = useSelector(state => state.viewMode.darkMode);
  const dispatch = useDispatch();

  // Make API call.
  useEffect(() => {
    dispatch(makeCountriesListAPICall({region: "all"}));
    /*
    let loadCountriesData = () => {
      dispatch(makeCountriesListAPICall({region: "all"}));
    }

    window.addEventListener("load", loadCountriesData);
    return () => {
      window.removeEventListener("load", loadCountriesData);
    }
    */
  }, [dispatch]);



  return (
    countriesList.data.map((element, index) => {
      return (
        <div className={viewMode ? "country-card country-card-dark" : "country-card country-card-light"} onClick={() => dispatch(getSingeCountryData({countryCode: element.ccn3}))} key={index}>
            {/* ===================== Flag ===================== */}
            <div className="country-flag-container">
                <img src={element.flags.png} alt="Flag" />
            </div>
            {/* ===================== Details ===================== */}
            <div className="country-short-details">
                <h4>{element.name.common}</h4>
                <p><span>Population: </span> {element.population}</p>
                <p><span>Region: </span>{element.region}</p>
                <p><span>Capital: </span>{element.capital}</p>
            </div>
        </div>
      )
    })
  )
}

export default Card;