import React from 'react';
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { closeSinglePageDetails } from "../Features/viewModeSlice";
// Icons.
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ImHome } from "react-icons/im";



function SingePageButtons() {
    const viewMode = useSelector(state => state.viewMode.darkMode);
    const dispatch = useDispatch();


    return (
        <div className={viewMode ? "single-country-btns single-country-btns-dark" : "single-country-btns single-country-btns-light"}>
            <button className="button"><HiOutlineArrowLeft/> Back</button>
            <button className="button" onClick={() => dispatch(closeSinglePageDetails())}><ImHome/> Home</button>
        </div>
    )
}

export default SingePageButtons;