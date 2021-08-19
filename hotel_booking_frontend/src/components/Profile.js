import { useEffect, useState } from "react";
import Request from "../helpers/request";

const Profile = () => {

    const [yourBookings, setYourBookings] = useState(null)

    const requestBookings = function(){
        const request = new Request();
        request.get('/api/bookings')
        .then((data) => {
            setYourBookings(data)
        })
    }

    const renderYourBookings = function(){
        let bookingsList = [];

        let index = 0;
        for(let booking of yourBookings){
            bookingsList.push(
                <div key={index}>
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
        return bookingsList;
    }

    useEffect(() => {
        requestBookings();
    }, [])

    useEffect(() => {
        if(yourBookings){
            renderYourBookings();
        }
    }, [yourBookings])

    return (
        <>
        {yourBookings ? renderYourBookings() : null}
        </>
    )
}

export default Profile;