import { useEffect, useState } from "react";
import Request from "../helpers/request";
import Confirmation from "./Confirmation";

function HotelInfo({bookingInfo, id, hotelDetails, setHotelFinalDetails, user}) {

    const [hotel, setHotel] = useState(null);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(()=>{
        if(bookingInfo){
            fetchHotel()
        }
    }, [bookingInfo]);    

    const fetchHotel = async () => {
        const fetchHotel = await fetch(`https://hotels4.p.rapidapi.com/properties/get-details?id=${id}&checkIn=${bookingInfo.Checkin}&checkOut=${bookingInfo.Checkout}&adults1=${bookingInfo.Adults}&currency=GBP&locale=en_US`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7f1f9f12f0mshb61724ebaadc332p1f6658jsnd12fd2c73285",
                "x-rapidapi-host": "hotels4.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(data => setHotel(data))
    }

    const handlePost = function(booking){
        const request = new Request();
        request.post("/api/bookings", booking)
    }

    const handleConfirmation = (room) => {
        let dbPrice = Number(room.ratePlans[0].price.current.substring(1))
        // let dbCheckin = new Date(bookingInfo.Checkin)
        // let dbCheckout = new Date(bookingInfo.Checkout)
        let newBooking = {
            hotel_id: hotelDetails.id,
            fromDate: bookingInfo.Checkin,
            toDate: bookingInfo.Checkout,
            price: dbPrice,
            numberOfAdults: bookingInfo.Adults,
            numberOfChildren: bookingInfo.Children,
            roomType: room.name,
            customer: user,
            hotelName: hotelDetails.name
        }
        console.log(newBooking)
        setHotelFinalDetails(hotel)
        setRoomDetails(room)
        handlePost(newBooking)
        setIsConfirmed(true)
    }

    const getHotelRooms = () => {
        if(hotel && hotelDetails){

        let availableRooms = [];
        let images = [];
        let index=0;
        for(let room of hotel.data.body.roomsAndRates.rooms){
            console.log(room.ratePlans[0].price.current)
            let roomDiv = <div key={index}>
                <h4>{room.name}</h4>
                <h4>{room.ratePlans[0].price.current}</h4>
                {/* <img src={room.images[0].thumbnailUrl} alt="Room thumbnail"/> */}
                <button onClick={() => handleConfirmation(room)}>Reserve Now</button>
            </div>
            availableRooms.push(roomDiv)
            index++;
        }
        return availableRooms;
    } else {
        return <p>Loading...</p>
    }
    }

    const renderHotelInfo = () => {
        if(hotel && hotelDetails){
            let fullTagLine = hotel.data.body.propertyDescription.tagline[0]
            let tagline = fullTagLine.substring(3, fullTagLine.length - 4)
            return (
                <div>
                    <h3>{hotelDetails.name}</h3>
                    <h5>{tagline}, {hotelDetails.address.locality}</h5>
                    <h5>{hotelDetails.starRating} stars</h5>
                    <div className="reviews">
                        <p>{hotelDetails.guestReviews.badgeText}</p>
                        <p>{hotelDetails.guestReviews.rating}</p>
                    </div>
                    <div className="purchaseRoom">
                        <p>{hotelDetails.ratePlan.price.info}</p>
                        <p>{hotelDetails.ratePlan.price.current}</p>
                    </div>
                    <div className="hotelRooms">
                        {getHotelRooms()}
                    </div>
                </div>
            )
        }
    }


    return(
        <>
           {isConfirmed ? <Confirmation hotel={hotel} roomDetails={roomDetails} bookingInfo={bookingInfo} hotelDetails={hotelDetails}/> : renderHotelInfo() }
        </>
    )
}

export default HotelInfo;