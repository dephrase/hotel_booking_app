import { Link } from "react-router-dom"

const NavBar = ({user}) => {

    if(user){
        return(
            <>
            <div className="navbar_container">
                <ul className="navbar_ul">
                    <li>
                        <Link to="/">
                            <span>
                                <h3>Home</h3>
                            </span>
                        </Link>
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