import './App.css';
import MainContainer from './containers/MainContainer';
import HotelInfo from './components/HotelInfo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
// import { useParams } from 'react-router';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {

  const [bookingInfo, setBookingInfo] = useState(null)

  return (
    <Router>
      <>
        <NavBar/>
        <Switch>
        <Route exact path="/" render={() => {
          return <MainContainer setBookingInfo={setBookingInfo} bookingInfo={bookingInfo}/>
        }}/>
        <Route path="/hotel_info/:id" render={(props) => {
          return <HotelInfo bookingInfo={bookingInfo} id={props.match.params.id}/>
        }}/>
          {/* // path="/hotel_info" exact render={() => <HotelInfo hotels={hotels} />}
             
        /> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
