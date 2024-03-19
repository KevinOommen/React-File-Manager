import React from "react"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
const NavigationComponent = () => {
    
    const { isAuthenticated, user} = useSelector(state => state.authReducer);
    return( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand ms-5" to="/">
            React File Manager
        </Link>
        <ul className="navbar-nav ms-auto me-5">
            {isAuthenticated? (
            <>  
            <li className="nav-item mx-2">
                <p className="text-white">
                 <span className="text-white"> Welcome, </span>  
                <span className="text-warning">{user.displayName}</span>
                 </p>
            </li>
            <li className="nav-item mx-2">
                <Link className="btn btn-primary btn-sm" to="/dashboard">
                    Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-success btn-sm" to="/logout">
                    Logout
                </Link>
            </li>
            </>
            ):
                
            (
            <>
            <li className="nav-item mx-2">
                <Link className="btn btn-primary btn-sm" to="/login">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-success btn-sm" to="/register">
                    Register
                </Link>
            </li>
            </>
            )
                 
        }
        </ul>
    </nav>
    )
};

export default NavigationComponent;