import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import HotelContainer from "./HotelContainer";
import { useState, useEffect } from "react";

const MainContainer = () => {

    const [bookingInfo, setBookingInfo] = useState(null)

    function renderHotels(){
        if(bookingInfo){
            return (
                <HotelContainer bookingInfo={bookingInfo}/>
            )
        }
    }

    return (
        <>
        <SearchBar setBookingInfo={setBookingInfo}/>
        {renderHotels()}
        </>
    )

}

export default MainContainer;