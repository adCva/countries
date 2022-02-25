import React from 'react';
// ========= Components.
import Nav from '../Components/Nav';
import Search from '../Components/Search';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
// ========= Redux.
import { useSelector } from 'react-redux';
import Load from '../Components/Load';
import BackTopBtn from '../Components/BackTopBtn';



function List() {
    // ========= Redux state.
    const darkMode = useSelector(state => state.viewMode.darkMode);
    const loading = useSelector(state => state.singlePage.loading);
    const loadingList = useSelector(state => state.countriesList.loadingList);


    return (
      <div className={darkMode ? "mainContent mainContent-dark" : "mainContent mainContent-light"}>
          <header>
              <Nav />
          </header>
          <main>
            {loading ? <Load /> : null}
            {loadingList ? <Load /> : null}
            {/* ===================== Where main content is, search & cards ===================== */}
            <div className="mainContent-container">
              <Search />
              <div className="cards-container">
                <Card />
              </div>
            </div>
            {/* ===================== End of main content ===================== */}
            <BackTopBtn />
          </main>
          <footer>
            <Footer />
          </footer>
      </div>
    )
}

export default List;