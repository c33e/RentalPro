import React from "react";
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
 
//bootstrap navbar with logo
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%', "paddingLeft" : "10px"}} src="logo.png"></img>
       </NavLink>
       <div className="navbar navbar-expand-lg navbar-light bg-light">
         <ul className="navbar-nav ml-auto">
            <NavLink className="nav-link" to="/">
               Home
             </NavLink>
             <NavLink className="nav-link" to="/rent">
               Rent
             </NavLink>
             <NavLink className="nav-link" to="/create">
               Create Profile
             </NavLink>
             <NavLink className="nav-link" to="/profiles">
               View Profiles
             </NavLink>
         </ul>
       </div>
     </nav>
   </div>
 );
}
