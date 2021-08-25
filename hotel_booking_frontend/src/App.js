import './App.css';
import MainContainer from './containers/MainContainer';
import HotelInfo from './components/HotelInfo';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Confirmation from './components/Confirmation';
import Request from './helpers/request';
import Profile from './components/Profile';


function App() {

  const [bookingInfo, setBookingInfo] = useState(null)
  const [hotelDetails, setHotel] = useState(null)
  const [hotelFinalDetails, setHotelFinalDetails] = useState(null)
  const [user, setUser] = useState(null)
  const [roomPrice, setRoomPrice] = useState(null);

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
        <NavBar user={user}/>
        <Switch>
        <Route exact path="/" render={() => {
          return <MainContainer setBookingInfo={setBookingInfo} bookingInfo={bookingInfo} setHotel={setHotel}/>
        }}/>
        <Route path="/hotel_info/:id" render={(props) => {
          return <HotelInfo setRoomPrice={setRoomPrice} user={user} bookingInfo={bookingInfo} id={props.match.params.id} hotelDetails={hotelDetails} setHotelFinalDetails={setHotelFinalDetails} roomPrice={roomPrice}/>
        }}/>
        <Route path="/confirmation" render={() => {
          return <Confirmation roomPrice={roomPrice} hotelFinalDetails={hotelFinalDetails}/>
        }}/>
        <Route path="/profile" render = {() => {
          return <Profile user={user}/>
        }}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;