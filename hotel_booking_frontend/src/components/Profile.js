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

        for(let booking of yourBookings){
            bookingsList.push(
                <div>
                    
                </div>
            )
        }
    }

    useEffect(() => {
        requestBookings();
    }, [])

    useEffect(() => {
        if(yourBookings){
            renderYourBookings();
        }
    }, [yourBookings])

    return <p>Profile page</p>

}

export default Profile;