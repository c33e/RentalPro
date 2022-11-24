import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
//form for editing
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   description: "",
   experience: "",
   image: "",
   profiles: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/profile/${params.id.toString()}`);
 
     //validate the id has a match
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const profile = await response.json();
     if (!profile) {
       window.alert(`Profile with id ${id} not found`);
       navigate("/");
       return;
     }
     setForm(profile);//sets the form with pre populated data
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // update the state
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedProfile = {
     name: form.name,
     description: form.description,
     experience: form.experience,
     image: form.image,
   };
 
   // sends a post request to update the data in the database
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedProfile),
     headers: {
       'Content-Type': 'application/json'
     },
   });
   navigate("/");
 }
 
 // the form for editing
 return (
   <div className="profileformcontainer">
     <form className="profileform"onSubmit={onSubmit}>
       <div className="formcontent">
         <h3 className="formtitle">Update Profile</h3>
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="formcontent">
         <label htmlFor="description">Description: </label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>
       <div className="formcontent">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="experienceOptions"
             id="experienceExperienced"
             value="Experienced"
             checked={form.experience === "Experienced"}
             onChange={(e) => updateForm({ experience: e.target.value })}
           />
           <label htmlFor="experienceExperienced" className="form-check-label">Experienced Driver</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="experienceOptions"
             id="experienceNew"
             value="new"
             checked={form.experience === "New Driver"}
             onChange={(e) => updateForm({ experience: e.target.value })}
           />
           <label htmlFor="experienceNew" className="form-check-label">New Driver</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="experienceLearner"
             value="Learner"
             checked={form.level === "Learner Driver"}
             onChange={(e) => updateForm({ experience: e.target.value })}
           />
           <label htmlFor="experienceLearner" className="form-check-label">Learner Driver</label>
       </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Profile"
           className="btn-primary"
         />
       </div>
     </form>
   </div>
 );
}

