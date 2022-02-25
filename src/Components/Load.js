import React from 'react';
// ========= Redux.
import { useSelector } from 'react-redux';

function Load() {
  // ========= Redux state.
  const darkMode = useSelector(state => state.viewMode.darkMode);


  return (
    <div className={darkMode ? "load-wrapper load-wrapper-dark" : "load-wrapper load-wrapper-light"}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Load;