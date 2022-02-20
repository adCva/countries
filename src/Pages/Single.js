import React from 'react';
// Components.
import Nav from '../Components/Nav';
import SingePageButtons from '../Components/SingePageButtons';
import SinglePageDetails from '../Components/SinglePageDetails';
import Footer from '../Components/Footer';
// Redux.
import { useSelector } from 'react-redux';



function Single() {
  // Redux state.
  const viewMode = useSelector(state => state.viewMode.darkMode);


  return (
    <div className={viewMode ? "mainContent mainContent-dark" : "mainContent mainContent-light"}>
        <header>
            <Nav />
        </header>
        <main>
          {/* ===================== Where main content is, search & cards ===================== */}
          <div className="mainContent-container">
            <SingePageButtons />
            <SinglePageDetails />
          </div>
          {/* ===================== End of main content ===================== */}
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Single;