import { useEffect, useState } from "react";


const HotelInfo = ({hotel}) => {

    const [hotelInformation, setHotelInformation] = useState(null)

    useEffect(() => {
        if(hotel){
            setHotelInformation(hotel)
        }
    }, [])

    return(
        <>
            {hotel ? <p>{hotelInformation.name}</p> : <p>Loading...</p>}
        </>
    )
    


}

export default HotelInfo;