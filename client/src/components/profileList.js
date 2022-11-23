import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/App.css";

const Profile = (props) => (

 <tr>
   <td>{props.profile.name}</td>
   <td>{props.profile.description}</td>
   <td>{props.profile.experience}</td>
   <td>{props.profile.selectedfile}</td>
   <td>
     <Link className="btn btn-link" style={{ background: "darkgreen" }} to={`/edit/${props.profile._id}`}>Edit</Link> |
     <button className="btn btn-link" style={{ background: "darkgreen" }}
       onClick={() => {
         props.deleteProfile(props.profile._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function ProfileList() {

 const [profiles, setProfiles] = useState([]);
 
 // This method fetches the profiles from the database.
 useEffect(() => {
   async function getProfiles() {
     const response = await fetch(`http://localhost:5000/profile/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const profiles = await response.json();
     setProfiles(profiles);
   }
   
 
   getProfiles();
 
   return;
 }, [profiles.length]);
 
 // This method will delete a record
 async function deleteProfile(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newProfiles = profiles.filter((el) => el._id !== id);
   setProfiles(newProfiles);
 }
 
 // This method will map out the records on the table
 function profileList() {
  
   return profiles.map((profile) => {
     return (
       <Profile
         profile={profile}
         deleteProfile={() => deleteProfile(profile._id)}
         key={profile._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3 className="profilelist">Profiles</h3>
     <table className="table table-hover" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th className="thstyles">Name</th>
           <th className="thstyles">Description</th>
           <th className="thstyles">Experience</th>
           <th className="thstyles">Profile Picture</th>
           <th className="thstyles">Make Changes</th>
         </tr>
       </thead>
       <tbody>{profileList()}</tbody>
     </table>
   </div>
 );
}

