import { useState, useEffect } from "react";

<<<<<<< HEAD
const SearchBar = ({setBookingInfo}) => {

    const [locations, setLocations] = useState(null);
    const [searchCountry, setSearchCountry] = useState(null);
    const [city, setSelectedCity] = useState(null);
    const [checkinDate, setCheckinDate] = useState(null);
    const [checkoutDate, setCheckoutDate] = useState(null);
    const [numberOfAdults, setNumberOfAdults] = useState("1")
    const [numberOfChildren, setNumberOfChildren] = useState("0")

    useEffect(() => {
        if(searchCountry != null){
            fetch(`https://hotels4.p.rapidapi.com/locations/search?query=${searchCountry}&locale=en_US`, {
                "method": "GET",
                "headers": {
                "x-rapidapi-key": "7f1f9f12f0mshb61724ebaadc332p1f6658jsnd12fd2c73285",
                "x-rapidapi-host": "hotels4.p.rapidapi.com"
                }
            })
            .then(res => res.json())
            .then(data => setLocations(data))
            .catch((err) => {
                console.log(err)
            })
        }
    }, [searchCountry])

    const getLocations = (event) => {
        if(event){
            const searchTerm = event.target.value.toLowerCase();
            setSearchCountry(searchTerm)
            return <p>Rendered</p>
        } else {
            return <p>Not rendered</p>
        }
    }

    function updateCitySelection(event){
        setSelectedCity(event.target.value)
    }

    function updateCheckinDate(event){
        setCheckinDate(event.target.value)
    }

    function updateCheckoutDate(event){
        setCheckoutDate(event.target.value)
    }

    function updateNumberOfAdults(event){
        setNumberOfAdults(event.target.value)
    }

    function updateNumberOfChildren(event){
        setNumberOfChildren(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(event)
        let bookingInfo = {
            "Country": event.target[0].value,
            "CityCode": event.target[1].value,
            "Checkin": event.target[2].value,
            "Checkout": event.target[3].value,
            "Adults": event.target[4].value,
            "Children": event.target[5].value
        }
        setBookingInfo(bookingInfo)
    }

    function renderCitySelect(){
        let options = [];
        if(locations != null){
            let index = 0;
            for(let city of locations.suggestions[0].entities){
                let name = city["name"];
                let destinationId = city["destinationId"];
                options.push(<option key={index} value={destinationId}>{name}</option>)
                index++
            }
            return(
                <div className="cityPicker">
                    <label htmlFor="city">City</label><br/>
                    <select id="city" name="city" onChange={updateCitySelection}>
                        {options}
                    </select>
                </div>
            )
        }
    }

    return (
        <>
        <div className="search_bar">
            <form className="search_form" onSubmit={handleSubmit}>
                <div className="countryPicker">
                <label htmlFor="country">Country</label><br/>
                <select id="country" name="country" onChange={getLocations}>
                    <option value="" selected disabled hidden>Select Country</option>
                    <option value="Spain">Spain</option>
                    <option value="Scotland">Scotland</option>
                </select>
                </div>
                {renderCitySelect()}
                <div className="check-in">
                    <label htmlFor="check-in">Check-in</label><br/>
                    <input type="date" id="check-in" name="check-in" onChange={updateCheckinDate}></input>
                </div>
                <div className="check-out">
                    <label htmlFor="check-out">Check-out</label><br/>
                    <input type="date" id="check-out" name="check-out" mindate={new Date(checkinDate)} onChange={updateCheckoutDate}></input>
                </div>
                <div className="guests">
                    <label htmlFor="guests">Adults: </label>
                    <input type="number" id="adults" name="adults" defaultValue="1" min="1" onChange={updateNumberOfAdults}></input><br/>
                    <label htmlFor="guests">Children: </label>
                    <input type="number" id="children" name="children" defaultValue="0" min="0" onChange={updateNumberOfChildren}></input>
                </div>
                <button type="submit">Search</button>
            </form>
            </div>
        </>
    )
=======
const SearchBar = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <>
            <p className="search_bar">SearchBar</p>
        </>
    )

>>>>>>> 0e7ca0c40775e45aeb997f67b5f31ef52cace5d0
}

export default SearchBar;