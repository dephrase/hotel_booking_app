import { useEffect, useState } from "react";


function HotelInfo({bookingInfo, id}) {

    const [hotel, setHotel] = useState(null);

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
        .then(console.log(hotel))
    }

    return(
        <>
            <p>{id}</p>
        </>
    )
    


}

export default HotelInfo;