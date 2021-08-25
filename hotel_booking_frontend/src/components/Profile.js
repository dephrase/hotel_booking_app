import { useEffect, useState } from "react";
import Request from "../helpers/request";

const Profile = () => {

    const [yourBookings, setYourBookings] = useState(null)
    const [pastBookings, setPastBookings] = useState(null)
    const [futureBookings, setFutureBookings] = useState(null)

    const requestBookings = function(){
        const request = new Request();
        request.get('/api/bookings')
        .then((data) => {
            setYourBookings(data)
        })
    }

    let today = new Date();
    let date = today.getFullYear() +'-'+(today.getMonth()+1)+'-'+today.getDate();
    let todaysDate = new Date(date);

    const renderBookings = function(bookingsList){
        let bookingsDivs = []; 

        let index = 0;
        for(let booking of bookingsList){
            bookingsDivs.push(
                <div className="individual_bookings"key={index}>
                    <h3>{booking.hotelName}</h3>
                    <h3>{booking.roomType}</h3>
                    <p>Check-in Date: {booking.fromDate}</p>
                    <p>Check-out Date: {booking.toDate}</p>
                    <p>Adults: {booking.numberOfAdults}</p>
                    <p>Children: {booking.numberOfChildren}</p>
                    <p>Price: £{booking.price}</p>
                </div>
                
            )
            index++;
        }
        return bookingsDivs;
    }

    const sortBookings = function(){
        let previousBookings = [];
        let futureBookings = [];

        let index = 0;

        for (let booking of yourBookings){
            let bookingDate = new Date(booking.fromDate);
            console.log(bookingDate)
            console.log(todaysDate)
            if(bookingDate >= todaysDate){
                futureBookings.push(booking);
                index++;
            } else {
                previousBookings.push(booking);
                index++;
            }
        }
        setPastBookings(previousBookings);
        setFutureBookings(futureBookings);
    }

    useEffect(() => {
        requestBookings();
    }, [])

    useEffect(() => {
        if(yourBookings){
            sortBookings();
        }
    }, [yourBookings])

    return (
        <>
        <h3>Upcoming Bookings</h3>
        <div className="profile_bookings_container">
        {futureBookings ? renderBookings(futureBookings) : null}
        </div>
        <h3>Previous Bookings</h3>
        <div className="profile_bookings_container">
        {pastBookings ? renderBookings(pastBookings) : null}
        </div>
        </>
    )
}

export default Profile;