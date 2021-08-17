import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HotelInfo from "../components/HotelInfo";

const HotelContainer = ({bookingInfo, setHotel}) => {

    const [hotels, setHotels] = useState(null);

    useEffect(() => {
        if(bookingInfo){        
            fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=${bookingInfo.CityCode}&pageNumber=1&pageSize=25&checkIn=${bookingInfo.Checkin}&checkOut=${bookingInfo.Checkout}&adults1=${bookingInfo.Adults}&sortOrder=PRICE&locale=en_US&currency=GBP`, {
	            "method": "GET",
	            "headers": {
		            "x-rapidapi-key": "7f1f9f12f0mshb61724ebaadc332p1f6658jsnd12fd2c73285",
		            "x-rapidapi-host": "hotels4.p.rapidapi.com"
	            }
            })
            .then(res => res.json())
            .then(data => setHotels(data))
        }
    }, [bookingInfo])

    const updateHotel = (hotel) => {
        setHotel(hotel)
    }

    function renderHotels(){
        let hotelDivs = [];
        if(hotels){
            let index = 0;
            for(let hotel of hotels.data.body.searchResults.results){
                let hotelDiv = <div key={index} className="hotel_div">
                    <h4>{hotel.name}</h4>
                    <img src={hotel.optimizedThumbUrls.srpDesktop} alt="Hotel Thumbnail"/>
                    <h6>{hotel.neighbourhood}</h6>
                    <p>{hotel.address.streetAddress}</p>
                    <p>{hotel.landmarks[0].distance} from {hotel.landmarks[0].label}</p>
                    <p>{hotel.starRating} stars</p>
                    <p>{hotel.ratePlan.price.fullyBundledPricePerStay}</p>
                    <p>{hotel.ratePlan.price.info}: {hotel.ratePlan.price.current}</p>
                    <p>HotelID: {hotel.id}</p>
                    <Link to={`/hotel_info/${hotel.id}`}><button onClick={() => updateHotel(hotel)}>Book Now</button></Link>
                </div>
                hotelDivs.push(hotelDiv)
                index++;
            }
            return hotelDivs;
        }
    }

    return (
        <>
        <div className = "hotel_container">
            <p>Hotel Container</p>
            {hotels ? renderHotels() : null}
        </div>
        </>
    )
}

export default HotelContainer;