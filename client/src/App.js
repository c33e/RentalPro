import React from "react";
import { Route, Routes} from "react-router-dom";
import Auth from "./components/Auth"
import Home from "./components/Home"
import Rent from "./components/rent"
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
     </Routes>
   </div>
 );
};
 
export default App;
