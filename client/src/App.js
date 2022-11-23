import React from "react";
//import './App.css'; 
// We use Route in order to define the different routes of our application
import { Route, Routes, BrowserRouter, Switch} from "react-router-dom";
 
// We import all the components we need in our app
import Auth from "./components/Auth"
import Home from "./components/Home"
import Rent from "./components/rent"
import Profile from "./components/profile"
import Navbar from "./components/navbar";
import ProfileList from "./components/profileList";
import Edit from "./components/edit";
import Create from "./components/create";


const App = () => {

  
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/profiles" element={<ProfileList />} />
       <Route path="/create" element={<Create />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/auth" element={<Auth />} />
       <Route path="/rent" element={<Rent />} />
       <Route path="/profile" element={<Profile />} />
     </Routes>
   </div>
 );
};
 
export default App;
