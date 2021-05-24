import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/resources/Navbar.css'

export const Navbar = (props) =>{
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Rexpot Mall</Link>

            <div className="collapse navbar-collapse" id="" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>

                    {/* <li className="nav-item">
                        <Link to="/shops" className="nav-link">All Shops</Link>
                    </li> */}

                    <li className="nav-item">
                        <Link to="/services" className="nav-link">Services</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contactus" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
            </div>
        
        </nav>
    );
}