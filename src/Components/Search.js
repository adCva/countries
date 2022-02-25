import React, { useState, useEffect, useRef } from 'react';
// ========= React Spring.
import { useTransition, animated } from 'react-spring';
// ========= Icons.
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSearchLocation } from "react-icons/fa";
// ========= Redux.
import { useSelector, useDispatch } from 'react-redux';
import { makeCountriesListAPICall } from "../Features/getCountriesMiddleware";
import { displatSearchFilterResaults, cancelSearchFilter, startLoadingList, updateRegionDisplayed } from "../Features/countriesListData";



function Search() {
    // ========= Redux state & dispatch.
    const countriesListBackup = useSelector(state => state.countriesList.backupCountriesListObj);
    const regionDisplayed = useSelector(state => state.countriesList.regionDisplayed);
    const darkMode = useSelector(state => state.viewMode.darkMode);
    const dispatch = useDispatch();


    // ========= Local state & ref.
    const [ dropDown, setDropDown ] = useState(false);
    const dropDownRef = useRef();


    // ========= Open/Close dropdown.
    const toogleDropDown = () => {
        setDropDown(!dropDown);
    };


    // ========= Search filter.
    const filter = (event) => {
        const keyword = event.target.value;

        if (keyword !== '') {
            const backUp = countriesListBackup.data;
            const results = backUp.filter((country) => {
                return country.name.common.toLowerCase().includes(keyword.toLowerCase());
            })

            dispatch(displatSearchFilterResaults({data: results}));
        } else {
            dispatch(cancelSearchFilter());
        }
    }


    // ========= Region filter.
    const chooseRegion = (continent) => {
        if (continent === regionDisplayed) {
            return null;
        } else {
            dispatch(startLoadingList());
            dispatch(makeCountriesListAPICall({region: continent}));
            dispatch(updateRegionDisplayed(continent))
            setDropDown(false);
        }
    }


    // ========= React Spring.
    const transition = useTransition(dropDown, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });


    // ========= Close dropdown on outside click.
    useEffect(() => {
        let closeOutsideClick = (event) => {
            if (dropDown === true && !dropDownRef.current.contains(event.target)) {
                setDropDown(false);
            }
        }

        document.addEventListener("click", closeOutsideClick);
        return() => {
            document.removeEventListener("click", closeOutsideClick);
        }
    });



    return (
        <div className={darkMode ? "search-dropDown-container search-dropDown-container-dark" : "search-dropDown-container search-dropDown-container-light"}>
            {/* ===================== Input, search by name ===================== */}
            <div className="search-by-name-wrapper">
                <FaSearchLocation/>
                <input type="text" name="country" placeholder="Search for a country..." onChange={filter} />
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