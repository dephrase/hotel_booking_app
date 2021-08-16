import { useState, useEffect } from "react";

const HotelContainer = ({bookingInfo}) => {

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

    function renderHotels(){
        if(hotels){
            for(let hotel of hotels.data.body.searchResults.results){
                console.log(hotel.name)
            }
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