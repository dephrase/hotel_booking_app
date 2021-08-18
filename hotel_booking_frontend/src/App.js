import './App.css';
import MainContainer from './containers/MainContainer';
import HotelInfo from './components/HotelInfo';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Confirmation from './components/Confirmation';
import Request from './helpers/request';

function App() {

  const [bookingInfo, setBookingInfo] = useState(null)
  const [hotelDetails, setHotel] = useState(null)
  const [hotelFinalDetails, setHotelFinalDetails] = useState(null)
  const [user, setUser] = useState(null)

  const requestUser = function(){
    const request = new Request();
    const userPromise = request.get('/api/customers')
    .then((data) => {
      setUser(data[0]);
    })
  }

  useEffect(() => {
    requestUser()
  }, [])

  return (
    <Router>
      <>
        <NavBar/>
        <Switch>
        <Route exact path="/" render={() => {
          return <MainContainer setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} setHotel={setHotel}/>
        }}/>
        <Route path="/hotel_info/:id" render={(props) => {
          return <HotelInfo bookingInfo={bookingInfo} id={props.match.params.id} hotelDetails={hotelDetails} setHotelFinalDetails={setHotelFinalDetails}/>
        }}/>
        <Route path="/confirmation" render={() => {
          return <Confirmation hotelFinalDetails={hotelFinalDetails}/>
        }}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;