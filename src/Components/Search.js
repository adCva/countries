import React, { useState, useEffect, useRef } from 'react';
// React Spring.
import { useTransition, animated } from 'react-spring';
// Icons.
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSearchLocation } from "react-icons/fa";
// Redux.
import { useSelector } from 'react-redux';



function Search() {
    // Redux state, local state & ref.
    const [ dropDown, setDropDown ] = useState(false);
    const viewMode = useSelector(state => state.viewMode.darkMode);
    const dropDownRef = useRef();


    // Open/Close dropdown.
    const toogleDropDown = () => {
        setDropDown(!dropDown);
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
                <input type="text" name="country" placeholder="Search for a country..." id="searchCountry" />
            </div>
            {/* ===================== Dropdown, search by region ===================== */}
            <div className="dropDown-wrapper">
                <button className="dropDown-region-btn" onClick={toogleDropDown}>Filter By Region {dropDown ? <IoIosArrowUp/> : <IoIosArrowDown/>} </button>
                {transition((style, mobileMenu) => mobileMenu ? (
                    <animated.div style={style} className="regions-menu" ref={dropDownRef} >
                        <button>All</button>
                        <button>Africa</button>
                        <button>America</button>
                        <button>Asia</button>
                        <button>Europe</button>
                        <button>Oceania</button>
                    </animated.div>
                ) : null)}
            </div>
        </div>
    )
}

export default Search;