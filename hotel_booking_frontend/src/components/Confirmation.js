import { useEffect} from "react";
import { Link } from "react-router-dom";

const Confirmation = ({hotel, roomDetails, bookingInfo, hotelDetails, roomPrice}) => {

    const getTotalPrice = () => {
        let checkinDateObject = new Date(bookingInfo.Checkin);
        let checkoutDateObject = new Date(bookingInfo.Checkout);
        let daysMillis = Math.abs(checkoutDateObject - checkinDateObject);
        let numberOfDays = (daysMillis / (60*60*24*1000))
        let price = numberOfDays * roomPrice;
        return price;
    }

    const renderConfirmation = () => {
            // console.log(hotel)
            // console.log(bookingInfo)
            // console.log(hotelDetails)
            // console.log(roomDetails)
            return(
                <div>
                    <h3>Confirm your booking</h3>
                    <div>  
                        <h4>{roomDetails.name} at {hotelDetails.name} for {bookingInfo.Adults} Adults from {bookingInfo.Checkin} to {bookingInfo.Checkout}</h4>
                        
                        {roomPrice ? <h4>Total Price: {getTotalPrice()}</h4> : null}
                        <Link to="/profile"><button>Book Stay!</button></Link>
                    </div>
                </div>
            )
        }

    return(
        <>
            {roomPrice ? renderConfirmation() : null}
        </>
    )
}

export default Confirmation;