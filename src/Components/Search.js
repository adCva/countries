import React, { useState, useEffect, useRef } from 'react';
// React Spring.
import { useTransition, animated } from 'react-spring';
// Icons.
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSearchLocation } from "react-icons/fa";
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { makeCountriesListAPICall } from "../Features/getCountriesMiddleware";
import { displatSearchFilterResaults, cancelSearchFilter } from "../Features/countriesListData";



function Search() {
    // Redux state, dispatch, local state & ref.
    const countriesList = useSelector(state => state.countriesList.countriesListObj);
    const viewMode = useSelector(state => state.viewMode.darkMode);
    const dispatch = useDispatch();

    const [ dropDown, setDropDown ] = useState(false);
    const [name, setName] = useState('');
    const dropDownRef = useRef();


    // Open/Close dropdown.
    const toogleDropDown = () => {
        setDropDown(!dropDown);
    }


    // Filter.
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = countriesList.data.filter((country) => {
                return country.name.common.toLowerCase().startsWith(keyword.toLowerCase());
            })

            dispatch(displatSearchFilterResaults({data: results}));
        } else {
            dispatch(cancelSearchFilter());
        }
    }


    // Region btn click.
    const chooseRegion = (geoRegion) => {
        dispatch(makeCountriesListAPICall({region: geoRegion}));
        setDropDown(false);
    }


    // React Spring.
    const transition = useTransition(dropDown, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });


    // Close dropdown on outside click.
    useEffect(() => {
        let dropDownOutsideClick = (event) => {
            if (dropDown === true && !dropDownRef.current.contains(event.target)) {
                setDropDown(false);
            }
        }


        document.addEventListener("click", dropDownOutsideClick);
        return() => {
            document.removeEventListener("click", dropDownOutsideClick);
        }
    })


    return (
        <div className={viewMode ? "search-dropDown-container min-max-width search-dropDown-container-dark" : "search-dropDown-container min-max-width search-dropDown-container-light"}>
            {/* ===================== Input, search by name ===================== */}
            <div className="search-by-name-wrapper">
                <FaSearchLocation/>
                <input type="text" name="country" placeholder="Search for a country..." id="searchCountry" onChange={filter}/>
            </div>
            {/* ===================== Dropdown, search by region ===================== */}
            <div className="dropDown-wrapper">
                <button className="dropDown-region-btn" onClick={toogleDropDown}>Filter By Region {dropDown ? <IoIosArrowUp/> : <IoIosArrowDown/>} </button>
                {transition((style, mobileMenu) => mobileMenu ? (
                    <animated.div style={style} className="regions-menu" ref={dropDownRef} >
                        <button onClick={() => chooseRegion("all")}>All</button>
                        <button onClick={() => chooseRegion("Africa")}>Africa</button>
                        <button onClick={() => chooseRegion("America")}>America</button>
                        <button onClick={() => chooseRegion("Asia")}>Asia</button>
                        <button onClick={() => chooseRegion("Europe")}>Europe</button>
                        <button onClick={() => chooseRegion("Oceania")}>Oceania</button>
                    </animated.div>
                ) : null)}
            </div>
        </div>
    )
}

export default Search;