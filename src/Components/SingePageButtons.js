import React from 'react';
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { removeLastCountryCode, closeSinglePageDetails } from "../Features/singlePageSlice";
import { cancelSearchFilter } from "../Features/countriesListData";
import { getSingeCountryData } from "../Features/getSingleCountryMiddleware";
// Icons.
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ImHome } from "react-icons/im";



function SingePageButtons() {
    const viewMode = useSelector(state => state.viewMode.darkMode);
    const countryCodesArray = useSelector(state => state.singlePage.singleCountryArray);
    const dispatch = useDispatch();

    // Home btn.
    const returnHome = () => {
        dispatch(closeSinglePageDetails())
        dispatch(cancelSearchFilter());
    }


    // Back btn.
    const backBtn = () => {
        if (countryCodesArray.length === 0) {
            returnHome();
        } else {
            let newArray = countryCodesArray.slice(0, countryCodesArray.length);
            dispatch(getSingeCountryData({countryCode: newArray[newArray.length - 1]}));
            newArray.pop();
            dispatch(removeLastCountryCode(newArray));
        }
    }

    return (
        <div className={viewMode ? "single-country-btns single-country-btns-dark" : "single-country-btns single-country-btns-light"}>
            <button className="button" onClick={() => backBtn()}><HiOutlineArrowLeft/> Back</button>
            <button className="button" onClick={() => returnHome()}><ImHome/> Home</button>
        </div>
    )
}

export default SingePageButtons;