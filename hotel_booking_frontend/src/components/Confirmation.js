import { useEffect} from "react";
import { Link } from "react-router-dom";

const Confirmation = ({hotel, roomDetails, bookingInfo, hotelDetails}) => {

    const renderConfirmation = () => {
        if(hotel){
            console.log(hotel)
            console.log(bookingInfo)
            console.log(hotelDetails)
            console.log(roomDetails)
            return(
                <div>
                    <h3>Confirm your booking</h3>
                    <div>  
                        <h4>{roomDetails.name} at {hotelDetails.name} for {bookingInfo.Adults} Adults from {bookingInfo.Checkin} to {bookingInfo.Checkout}</h4>
                        <h4>Total Price: Get total price from room</h4>
                        <Link to="/profile"><button>Book Stay!</button></Link>
                    </div>
                </div>
            )
        }
    }

    return(
        <>
            {renderConfirmation()}
        </>
    )
}

export default Confirmation;