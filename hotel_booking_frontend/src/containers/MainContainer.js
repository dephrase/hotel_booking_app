import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
<<<<<<< HEAD
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
        <NavBar/>
        <SearchBar setBookingInfo={setBookingInfo}/>
        {renderHotels()}
=======

const MainContainer = () => {

    return (
        <>
        <NavBar/>
        <SearchBar/>
>>>>>>> 0e7ca0c40775e45aeb997f67b5f31ef52cace5d0
        </>
    )

}

export default MainContainer;