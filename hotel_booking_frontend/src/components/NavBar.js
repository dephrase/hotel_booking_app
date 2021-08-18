import { Link } from "react-router-dom"

const NavBar = ({user}) => {

    if(user){
        return(
            <>
            <div className="navbar_container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <span>
                                <p>{user.firstName} {user.lastName}</p>
                                <p>Level: {user.accountLevel}</p>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            </>
        )
    } else {
        return <p>Loading your profile...</p>
    }
    
}

export default NavBar;