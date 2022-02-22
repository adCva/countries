import './Reset.css';
import './Scss/style.css';
// Components.
import Single from './Pages/Single';
import List from './Pages/List';
// Redux.
import { useSelector } from 'react-redux';



function App() {
  // Redux state.
  const viewPage = useSelector(state => state.singlePage.singlePageDetailsOpened);

  return (
    <div className="App">
      {viewPage ? (
        <Single />
      ) : (
        <List />
      )}
      
    </div>
  );
}

export default App;