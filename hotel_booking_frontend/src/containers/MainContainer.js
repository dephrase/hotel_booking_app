import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import HotelContainer from "./HotelContainer";
import { useState, useEffect } from "react";

const MainContainer = ({setBookingInfo, bookingInfo, setHotel}) => {

    function renderHotels(){
        if(bookingInfo){
            return (
                <HotelContainer bookingInfo={bookingInfo} setHotel={setHotel}/>
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