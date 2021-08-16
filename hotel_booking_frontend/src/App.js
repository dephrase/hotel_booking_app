import './App.css';
import MainContainer from './containers/MainContainer';
import HotelInfo from './components/HotelInfo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import NavBar from './components/NavBar';

function App() {


  return (
    <Router>
      <>
        <NavBar/>
        <Route exact path="/" component={MainContainer} />
        <Route path="/hotel_info" component={HotelInfo} />
      </>
    </Router>
  );
}

export default App;
