import React from 'react';
// Components.
import Nav from '../Components/Nav';
import Search from '../Components/Search';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
// Redux.
import { useSelector } from 'react-redux';



function List() {
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
              <Search />
              <div className="cards-container">
                <Card />
              </div>
            </div>
            {/* ===================== End of main content ===================== */}
          </main>
          <footer>
            <Footer />
          </footer>
      </div>
    )
}

export default List;