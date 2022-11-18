import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   description: "",
   experience: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await 
fetch(`http://localhost:5000/profile/${params.id.toString()}`);
 
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
 
     setForm([profile]);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
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
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedProfile),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Profile</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Description: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="experienceExperienced"
             value="Experienced"
             checked={form.experience === "Intern"}
             onChange={(e) => updateForm({ experience: e.target.value })}
           />
           <label htmlFor="positionIntern" 
className="form-check-label">Experienced Driver</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="experienceNew"
             value="new"
             checked={form.experience === "New Driver"}
             onChange={(e) => updateForm({ experience: e.target.value })}
           />
           <label htmlFor="positionJunior" 
className="form-check-label">New Driver</label>
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
           <label htmlFor="positionSenior" 
className="form-check-label">Learner Driver</label>
       </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
