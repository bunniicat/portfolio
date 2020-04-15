import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav className="navbar navbar-default">
         <div className="container-fluid">
            <div className="navbar-header">
             <Link to="/" className="logo navlogo">創</Link>
            </div>
            <ul className="nav navbar-nav navbar-center">
            <li><Link to="/">homepage.js</Link></li>
            <li><Link to="/about">about.js</Link></li>
            <li><Link to="/projects">projects.js</Link></li>
            <li><Link to="/contact">contact.js</Link></li>
             </ul>
        </div>
        </nav>
    )
}

export default Navigation;