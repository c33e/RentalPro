import React from "react";
import './App.css';
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%'}} 
src="logo.png"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" 
id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
            <NavLink className="nav-link" to="/">
               Home
             </NavLink>
             <NavLink className="nav-link" to="/create">
               Create Profile
             </NavLink>
             <NavLink className="nav-link" to="/profiles">
               View Profiles
             </NavLink>
             <NavLink className="nav-link" to="/auth">
               Auth
             </NavLink>
             <NavLink className="nav-link" to="/rent">
               Rent
             </NavLink>
         </ul>
       </div>
     </nav>
   </div>
 );
}
