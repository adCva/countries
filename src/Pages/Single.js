import React from 'react';
// ========= Components.
import Nav from '../Components/Nav';
import SingePageButtons from '../Components/SingePageButtons';
import SinglePageDetails from '../Components/SinglePageDetails';
import Footer from '../Components/Footer';
import Load from '../Components/Load';
// ========= Redux.
import { useSelector } from 'react-redux';



function Single() {
  // ========= Redux state.
  const darkMode = useSelector(state => state.viewMode.darkMode);
  const loading = useSelector(state => state.singlePage.loading);


  return (
    <div className={darkMode ? "mainContent mainContent-dark" : "mainContent mainContent-light"}>
        <header>
            <Nav />
        </header>
        <main>
          {loading ? <Load /> : null}
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