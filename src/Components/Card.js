import React, { useEffect } from 'react';
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { makeCountriesListAPICall } from "../Features/getCountriesMiddleware";
import { getSingeCountryData } from "../Features/getSingleCountryMiddleware";
import { startLoading } from "../Features/singlePageSlice";



function Card() {
  // Redux state & dispatch.
  const countriesList = useSelector(state => state.countriesList.countriesListObj);
  const viewMode = useSelector(state => state.viewMode.darkMode);
  const dispatch = useDispatch();

  
  // Make API call on page load.
  useEffect(() => {
    let loadCountriesData = () => {
      dispatch(makeCountriesListAPICall({region: "all"}));
    }

    window.addEventListener("load", loadCountriesData);
    return () => {
      window.removeEventListener("load", loadCountriesData);
    }
  });


  // Go to details page.
  const detailsPage = (countryCode) => {
    dispatch(startLoading());
    dispatch(getSingeCountryData({countryCode: countryCode}));
  };



  return (
    countriesList.data.map((element, index) => {
      return (
        <div className={viewMode ? "country-card country-card-dark" : "country-card country-card-light"} onClick={() => detailsPage(element.ccn3)} key={index}>
            {/* ===================== Flag ===================== */}
            <div className="country-flag-container">
                <img src={element.flags.png} alt="Flag" />
            </div>
            {/* ===================== Details ===================== */}
            <div className="country-short-details">
                <h4>{element.name.common}</h4>
                <p><span>Population: </span> {element.population.toLocaleString("en-US")}</p>
                <p><span>Region: </span>{element.region}</p>
                <p><span>Capital: </span>{element.capital}</p>
            </div>
        </div>
      )
    })
  )
}

export default Card;