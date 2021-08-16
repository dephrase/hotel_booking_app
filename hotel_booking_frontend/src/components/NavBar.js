import { Link } from "react-router-dom"

const NavBar = () => {

    return(
        <>
        <div className="navbar_container">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/my_profile">My Profile</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavBar;