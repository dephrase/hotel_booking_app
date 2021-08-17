import { useEffect} from "react";

const Confirmation = ({hotel}) => {

    const renderConfirmation = () => {
        if(hotel){
            console.log(hotel)
            return(
                <div>
                    <h3>Your booking confirmation</h3>
                    <div>

                    </div>
                </div>
            )
        }
    }

    return(
        <>
            {renderConfirmation()}
        </>
    )
}

export default Confirmation;